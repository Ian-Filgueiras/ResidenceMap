const express = require("express");
const sindicoController = require("../controllers/sindicoController");
const router = express.Router();

router.get("/", sindicoController.getAll);
router.get("/:id", sindicoController.get);
router.post("/", sindicoController.post);
router.put("/:id", sindicoController.put);
router.delete("/:id", sindicoController.delete);

module.exports = router;