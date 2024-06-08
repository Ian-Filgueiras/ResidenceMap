const express = require("express");
const porteiroController = require("../controllers/porteiroController");
const router = express.Router();
const isAuth = require("../middleware/isAuth");


router.get("/", isAuth, porteiroController.getAll);
router.get("/:id", isAuth, porteiroController.get);
router.post("/", isAuth, porteiroController.post);
router.put("/:id", isAuth, porteiroController.put);
router.delete("/:id", isAuth, porteiroController.delete);

module.exports = router;