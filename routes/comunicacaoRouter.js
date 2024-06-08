const express = require("express");
const comunicacaoController = require("../controllers/comunicacaoController");
const router = express.Router();
const isAuth = require("../middleware/isAuth");

router.get("/", isAuth, comunicacaoController.getAll);
router.get("/:id", isAuth, comunicacaoController.get);
router.post("/", isAuth, comunicacaoController.post);
router.delete("/:id", isAuth, comunicacaoController.delete);

module.exports = router;