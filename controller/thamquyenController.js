const { DanToc, QuocTich, ThamQuyen } = require("../model/model");

const thamquyenController = {
  getList: async (req, res) => {
    try {
      const list = await ThamQuyen.find();
      res.status(200).json({
        status: 1,
        data: list,
        message: "Hiển thị danh sách thành công!",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  create: async (req, res) => {
    try {
      const newTQ = new ThamQuyen(req.body);
      const saveTQ = await newTQ.save();
      res.status(200).json({
        status: 1,
        data: saveTQ,
        message: "Tạo mới thẩm quyền thành công!",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  update: async (req, res) => {
    try {
      const update = ThamQuyen.findById(req.params.id);
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
      await ThamQuyen.findByIdAndDelete(req.params.id);
      res.status(200).json({
        status: 1,
        message: "Xóa thành công!",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = thamquyenController;
