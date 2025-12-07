// const ApplyCondinate = require("../models/ApplyCondinate");
const path = require("path");
const fs = require("fs");
const ApplyCondinate = require("../Model/ApplyCondinate");

exports.createApplication = async (req, res) => {
  try {
    const { name, email, mobile, message, qualification } = req.body;

    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "CV is required" });
    }

    const data = new ApplyCondinate({
      name,
      email,
      mobile,
      message,
      qualification,
      cv: req.file.filename,
    });

    await data.save();

    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getAllApplications = async (req, res) => {
  try {
    const data = await ApplyCondinate.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteApplication = async (req, res) => {
  try {
    const id = req.params.id;

    const app = await ApplyCondinate.findById(id);
    if (!app) {
      return res
        .status(404)
        .json({ success: false, message: "Data not found" });
    }

    const filePath = path.join(__dirname, "../uploads", app.cv);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath); // delete CV
    }

    await ApplyCondinate.findByIdAndDelete(id);

    res
      .status(200)
      .json({ success: true, message: "Application deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
