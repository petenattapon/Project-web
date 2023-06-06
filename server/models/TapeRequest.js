const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: { type: String },
  productName: { type: String },
  productDetail: { type: String },
  sideA: { type: String },
  sideB: { type: String },
  opProduct: { type: String },
  allProduct: { type: String,default: "All" },
  createdAt: { type: Date, default: Date.now() } // เพิ่มฟิลด์ createdAt เพื่อเก็บเวลาที่สร้างข้อมูล
}, {
  collection: "TapesCass"
});

module.exports = mongoose.model("tape", productSchema);
