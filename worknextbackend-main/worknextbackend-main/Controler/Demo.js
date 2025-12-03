// const DemoMOdel = require("../Model/Demo");
// const Demo = require("../Model/DemoModel");

const DemoMOdel = require("../Model/Demo");

// Create Demo Entry
const createDemo = async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;

    const newDemo = new DemoMOdel({ name, email, mobile, message });
    await newDemo.save();

    res.status(201).json({ success: true, message: "Demo request submitted", data: newDemo });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Get All Demo Entries
const getDemos = async (req, res) => {
  try {
    const demos = await DemoMOdel.find().sort({ createdAt: -1 });
    res.json({ success: true, data: demos });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Delete Demo
const deleteDemo = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteItem = await DemoMOdel.deleteOne({ _id: id });

    res.json({ success: true, data: deleteItem });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

module.exports = { createDemo, getDemos, deleteDemo };
