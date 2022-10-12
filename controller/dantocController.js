const { DanToc, QuocTich, ThamQuyen } = require("../model/model");

const dantocController = {
  getList: async (req, res) => {
    try {
      const list = await DanToc.find();
      res.status(200).json({
        status: 1,
        data: list,
        message: "Lấy thông tin thành công!",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  create: async (req, res) => {
    try {
      const dantocNew = new DanToc(req.body);
      const dantocSave = await dantocNew.save();
      res.status(200).json({
        status: 1,
        data: dantocSave,
        message: "Thêm mới thành công!",
      });
    } catch (error) {}
  },
  update: async (req, res) => {
    try {
      const update = DanToc.findById(req.params.id);
      await update.updateOne({ $set: req.body });
      res.status(200).json({
        status: 1,
        message: "Sửa thành công!",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  delete: async (req, res) => {
    try {
      await DanToc.findByIdAndDelete(req.params.id);
      res.status(200).json({
        status: 1,
        message: "Xoá thành công!",
      });
    } catch (error) {}
  },
};

module.exports = dantocController;
