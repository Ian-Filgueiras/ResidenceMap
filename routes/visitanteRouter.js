const express = require("express");
const visitanteController = require("../controllers/visitanteController");
const router = express.Router();
const isAuth = require("../middleware/isAuth");

router.get("/", isAuth, visitanteController.getAll);
router.get("/:id", isAuth, visitanteController.get);
router.post("/", isAuth, visitanteController.post);
router.put("/:id", isAuth, visitanteController.put);
router.delete("/:id", isAuth, visitanteController.delete);

module.exports = router;