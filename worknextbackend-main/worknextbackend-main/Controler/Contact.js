// controllers/contactController.js
// const Contact = require("../models/Contact");

const Contact = require("../Model/Contact");

// Create Contact
const createContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Contact saved successfully",
      data: newContact,
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Get All Contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// // Delete Contact
const deleteContact = async (req, res) => {
  try {
    const ContactId = req.params.id;
    const deletedContact = await Contact.deleteOne({_id:ContactId});

    res.send({ success: true, data: deletedContact });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

module.exports = { createContact, getContacts ,deleteContact};
