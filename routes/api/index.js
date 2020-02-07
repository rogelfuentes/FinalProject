const router = require("express").Router();
const deviceRoutes = require("./devices");

router.use("/devices", deviceRoutes);

module.exports = router;
