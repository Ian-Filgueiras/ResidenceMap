const express = require("express");
const porteiroController = require("../controllers/porteiroController");
const router = express.Router();

router.get("/", porteiroController.getAll);
router.get("/:id", porteiroController.get);
router.post("/", porteiroController.post);
router.put("/:id", porteiroController.put);
router.delete("/:id", porteiroController.delete);

module.exports = router;