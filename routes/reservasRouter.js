const express = require("express");
const reservasController = require("../controllers/reservasController");
const router = express.Router();
const isAuth = require("../middleware/isAuth");

router.get("/", isAuth, reservasController.getAll);
router.get("/:id", isAuth, reservasController.get);
router.post("/", isAuth, reservasController.post);
router.put("/:id", isAuth, reservasController.put);
router.delete("/:id", isAuth, reservasController.delete);

module.exports = router;