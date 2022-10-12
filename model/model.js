const mongoose = require("mongoose");

const DMDanToc = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

const DMQuocTich = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
});

const DMTQ = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
});

let ThamQuyen = mongoose.model("danhmucthamquyen", DMTQ);
let DanToc = mongoose.model("dantoc", DMDanToc);
let QuocTich = mongoose.model("quoctich", DMQuocTich);

module.exports = { DanToc, QuocTich, ThamQuyen };
