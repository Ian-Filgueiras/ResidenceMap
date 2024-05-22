const express = require("express");
const condominioController = require("../controllers/condominioController");
const router = express.Router();

router.get("/", condominioController.getAll);
router.get("/:id", condominioController.get);
router.post("/", condominioController.post);
router.put("/:id", condominioController.put);
router.delete("/:id", condominioController.delete);

module.exports = router;