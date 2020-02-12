const router = require("express").Router();
const deviceRoutes = require("./devices");
const deviceContactRoutes = require('./DevicesContact');

router.use("/devices", deviceRoutes);
router.use('/DeviceContact', deviceContactRoutes)

module.exports = router;
