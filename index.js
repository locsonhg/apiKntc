const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const port = 8000;
const dantocRouter = require("./router/dantoc");
const quoctichRouter = require("./router/quoctich");
const thamquyenRouter = require("./router/thamquyen");
dotenv.config();

app.use(morgan("common"));
app.use(cors());
app.use(express.json());
app.use("/danhmuc", dantocRouter);
app.use("/danhmuc", quoctichRouter);
app.use("/danhmuc", thamquyenRouter);

// ket noi database
mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("conected to database");
  app.listen(port, () => {
    console.log(" conected to sever");
  });
});
