const express = require("express");
const condominoController = require("../controllers/condominoController");
const router = express.Router();

router.get("/", condominoController.getAll);
router.get("/:id", condominoController.get);
router.post("/", condominoController.post);
router.put("/:id", condominoController.put);
router.delete("/:id", condominoController.delete);

module.exports = router;