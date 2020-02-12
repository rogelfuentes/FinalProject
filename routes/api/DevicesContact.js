const router = require("express").Router();
const devicesContactController = require("../../controllers/devicesContactController");


router
  .route("/")
  .post(devicesContactController.findById),

  router
  .route('/DeviceContact')
  .post(devicesContactController.create),
  

module.exports = router;