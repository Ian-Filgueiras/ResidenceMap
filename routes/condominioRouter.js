const express = require("express");
const condominioController = require("../controllers/condominioController");
const router = express.Router();
const isAuth = require("../middleware/isAuth");

router.get("/", isAuth, condominioController.getAll);
router.get("/:id", isAuth, condominioController.get);
router.post("/", isAuth, condominioController.post);
router.put("/:id", isAuth, condominioController.put);
router.delete("/:id", isAuth, condominioController.delete);

module.exports = router;