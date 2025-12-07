const express = require("express");
const router = express.Router();
const upload = require("../Middleware/uploadMiddleware");
const applyController = require("../Controler/applyController");

router.post("/apply", upload.single("cv"), applyController.createApplication);
router.get("/applications", applyController.getAllApplications);
router.delete("/delete/:id", applyController.deleteApplication);

module.exports = router;
