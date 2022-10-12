const { DanToc, QuocTich, ThamQuyen } = require("../model/model");

const quoctichController = {
  getList: async (req, res) => {
    try {
      const list = await QuocTich.find();
      res.status(200).json({
        status: 1,
        data: list,
        message: "Lấy danh sách thành công!",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  create: async (req, res) => {
    try {
      const newQuoctich = new QuocTich(req.body);
      const saveQuoctich = await newQuoctich.save();
      res.status(200).json({
        status: 1,
        data: saveQuoctich,
        message: "Tạo Quốc Tịch thành công!",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  update: async (req, res) => {
    try {
      const update = QuocTich.findById(req.params.id);
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
      await QuocTich.findByIdAndDelete(req.params.id);
      res.status(200).json({
        status: 1,
        message: "Xóa thành công!",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = quoctichController;
