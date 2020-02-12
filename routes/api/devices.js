const router = require("express").Router();
const devicesController = require("../../controllers/devicesControllers");

router.route("/")
  .get(devicesController.findAll)
  .post(devicesController.create);

router
  .route("/:id")
  .get(devicesController.findById)
  .put(devicesController.update)
  .delete(devicesController.remove);

router
  .route('/search')
  .post(devicesController.findByDisplayName)

router
  .route('/DeviceContact')
  .post(devicesController.findByDisplayName)

module.exports = router;