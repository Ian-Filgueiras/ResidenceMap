const express = require("express");
const condominoController = require("../controllers/condominoController");
const router = express.Router();
const isAuth = require("../middleware/isAuth");

router.get("/", isAuth, condominoController.getAll);
router.get("/:id", isAuth, condominoController.get);
router.post("/", isAuth, condominoController.post);
router.put("/:id", isAuth, condominoController.put);
router.delete("/:id", isAuth, condominoController.delete);

module.exports = router;