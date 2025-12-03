// models/Contact.js
const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
    },
    service: {
      type: String,
      enum: [
        "Digital Marketing",
        "Graphic Designing",
        "Web_Development_&_App_Development",
        "AI & IT Development",
        "Business_Consultancy",
      ],
      required: true,
    },
    message: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);
const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
