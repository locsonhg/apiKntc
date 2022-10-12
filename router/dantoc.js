const router = require("express").Router();
const dantocController = require("../controller/dantocController");

router.get("/dantoc", dantocController.getList);
router.post("/dantoc", dantocController.create);
router.put("/dantoc/:id", dantocController.update);
router.delete("/dantoc/:id", dantocController.delete);

module.exports = router;
