const mongoose = require("mongoose");
const db = require("../models");
const data  = require('../data/data.json')

// This file empties the Devices collection and inserts the devices below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/telehealth"
);
const deviceSeed = data.map(device => {
  return {
    displayName: device.displayName,
    deviceId: device.deviceId,
    facility: device.facility,
    unit: device.unit,
    sip: device.sip,
    status:device.status,
    notes: device.notes,
  }
})
const deviceSeedTemp = [
  {
    displayName: "SL.ME.405",
    deviceId: "1000001",
    facility: "SL",
    unit: "ME",
    sip: "SL.ME.405@tdm.org",
    status: "Active",
    notes: "Device has been update",
  },  {
    displayName: "RO.IN.405",
    deviceId: "1000001",
    facility: "RO",
    unit: "IN",
    sip: "RO.IN.405@tdm.org",
    status: "Down For Maintenance",
    notes: "Device has been update",
  },  {
    displayName: "PC.ON.405",
    deviceId: "1000001",
    facility: "PC",
    unit: "ON",
    sip: "PC.ON.405@tdm.org",
    status: "Active",
    notes: "Device has been update",
  },  {
    displayName: "SG.CA.405",
    deviceId: "1000001",
    facility: "SG",
    unit: "CA",
    sip: "SG.CA.405@tdm.org",
    status: "Active",
    notes: "Device has been update",
  },  {
    displayName: "PR.PE.405",
    deviceId: "10005",
    facility: "PR",
    unit: "PE",
    sip: "PR.PE.405@tdm.org",
    status: "Active",
    notes: "Device has been update",
  },
];

db.Device
  .remove({})
  .then(() => db.Device.collection.insertMany(deviceSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
