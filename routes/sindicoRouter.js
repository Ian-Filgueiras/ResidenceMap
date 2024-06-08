const express = require("express");
const sindicoController = require("../controllers/sindicoController");
const router = express.Router();
const isAuth = require("../middleware/isAuth");

router.get("/", isAuth, sindicoController.getAll);
router.get("/:id", isAuth, sindicoController.get);
router.post("/", isAuth, sindicoController.post);
router.put("/:id", isAuth, sindicoController.put);
router.delete("/:id", isAuth, sindicoController.delete);

module.exports = router;