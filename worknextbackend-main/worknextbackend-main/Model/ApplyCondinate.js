const mongoose = require("mongoose");

const ApplyCondinateSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    message: { type: String },
    qualification: { type: String },
    cv: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ApplyCondinate", ApplyCondinateSchema);
