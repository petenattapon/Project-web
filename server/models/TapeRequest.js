const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: { type: String },
  productDetail: { type: String },
  sideA: { type: String },
  sideB: { type: String },
  opProduct: { type: String },
});

module.exports = mongoose.model("tape", productSchema);
