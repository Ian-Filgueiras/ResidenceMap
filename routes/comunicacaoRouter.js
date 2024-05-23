const express = require("express");
const comunicacaoController = require("../controllers/comunicacaoController");
const router = express.Router();

router.get("/", comunicacaoController.getAll);
router.get("/:id", comunicacaoController.get);
router.post("/", comunicacaoController.post);
router.delete("/:id", comunicacaoController.delete);

module.exports = router;