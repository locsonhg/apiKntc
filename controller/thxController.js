const { Tinh, Huyen, Xa, Tinh } = require("../model/THXmodel");

const tinhController = {
  getList: async (req, res) => {
    try {
      const list = await Tinh.find().then(() => {
        res.status(200).json({
          status: 1,
          data: list,
          message: "Lấy danh sách thành công!",
        });
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  readATinh: async (req, res) => {
    try {
      const readTinh = await Tinh.findById(req.params.id).then(() => {
        res.status;
      });
    } catch (error) {}
  },
  create: async (req, res) => {
    try {
    } catch (error) {}
  },
};
