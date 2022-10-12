const router = require("express").Router();
const thamquyenController = require("../controller/thamquyenController");

router.get("/thamquyen", thamquyenController.getList);
router.post("/thamquyen", thamquyenController.create);
router.put("/thamquyen/:id", thamquyenController.update);
router.delete("/thamquyen/:id", thamquyenController.delete);

module.exports = router;
