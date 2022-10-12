const mongoose = require("mongoose");
const { create } = require("../controller/thamquyenController");

const tinhSchema = new mongoose.Schema(
  {
    tentinh: {
      type: String,
      require: true,
      unique: true,
    },
    idhuyen: {
      type: String,
      ref: "Huyen",
    },
  },
  {
    collation: "Tinh",
  }
);
const huyenSchema = new mongoose.Schema(
  {
    tenhuyen: {
      type: String,
      require: true,
      unique: true,
    },
    idxa: {
      type: String,
      ref: "Xa",
    },
  },
  {
    collation: "Huyen",
  }
);

const xaSchema = new mongoose.Schema(
  {
    tenxa: {
      type: String,
      require: true,
      unique: true,
    },
  },
  {
    collation: "xa",
  }
);

const Huyen = mongoose.model("Huyen", huyenSchema);
const Tinh = mongoose.model("Tinh", tinhSchema);
const Xa = mongoose.model("Xa", xaSchema);

module.exports = { Tinh, Huyen, Xa };
