const express = require("express");
const areaController = require("../controllers/areaController");
const router = express.Router();
const isAuth = require("../middleware/isAuth");

router.get("/", isAuth, areaController.getAll);
router.get("/:id", isAuth, areaController.get);
router.post("/", isAuth, areaController.post);
router.put("/:id", isAuth, areaController.put);
router.delete("/:id", isAuth, areaController.delete);

module.exports = router;