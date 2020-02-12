const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  displayName: { type: String, required: true},
  deviceId: { type: String, required: true },
  facility: { type: String, required: true},
  unit: { type: String, required: true },
  floor: { type: String, required: true},
  phone: {type: String, required: true},
  contact: { type: String, required: true},
  unitNote:{ type: String, required: false},
});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
