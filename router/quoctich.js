const router = require("express").Router();
const quoctichController = require("../controller/quoctichController");

router.get("/quoctich", quoctichController.getList);
router.post("/quoctich", quoctichController.create);
router.put("/quoctich/:id", quoctichController.update);
router.delete("/quoctich/:id", quoctichController.delete);

module.exports = router;
