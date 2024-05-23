const express = require("express");
const visitanteController = require("../controllers/visitanteController");
const router = express.Router();

router.get("/", visitanteController.getAll);
router.get("/:id", visitanteController.get);
router.post("/", visitanteController.post);
router.put("/:id", visitanteController.put);
router.delete("/:id", visitanteController.delete);

module.exports = router;