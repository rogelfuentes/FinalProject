import axios from "axios";

export default {
  // Gets all devices
  getDevices: function () {
    return axios.get("/api/devices");
  },
  // Gets the device with the given id
  getDevice: function (id) {
    return axios.get("/api/devices/" + id);
  },
  getDeviceByName: function (displayName) {
    return axios.post("/api/devices/search/", { displayName });
  },
  // Deletes the device with the given id
  deleteDevice: function (id) {
    return axios.delete("/api/devices/" + id);
  },
  // Saves a device to the database
  saveDevice: function (deviceData) {
    return axios.post("/api/devices", deviceData);
  },
    // Saves a device to the database
  saveContact: function (deviceData) {
    return axios.post("/api/contacts", deviceData);
  },
  getContacts: function () {
    return axios.post("/api/DeviceContact");
  },
  getDeviceContact: (name) => {
    return axios.post(`/api/DeviceContact/`, { name })
  }
};