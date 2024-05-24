const express = require("express");
const reservasController = require("../controllers/reservasController");
const router = express.Router();


router.get("/", reservasController.getAll);
router.get("/:id", reservasController.get);
router.post("/", reservasController.post);
router.put("/:id", reservasController.put);
router.delete("/:id", reservasController.delete);

module.exports = router;