const express = require("express");
const {
  createContact,
  getContacts,
  deleteContact,
} = require("../Controler/Contact");
const ContactRouter = express.Router();

ContactRouter.post("/Contact", createContact);
ContactRouter.get("/Contact", getContacts);
ContactRouter.delete("/Contact/:id", deleteContact)


module.exports = ContactRouter;
