const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deviceSchema = new Schema({
  displayName: { type: String, required: true},
  deviceId: { type: String, required: true },
  facility: { type: String, required: true},
  unit: { type: String, required: true },
  sip: { type: String, required: true },
  status: { type: String, required: true },
  notes: String,
  // notes: { date: { type: Date, default: Date.now }, notes: String },
});

const Device = mongoose.model("Device", deviceSchema);

module.exports = Device;
