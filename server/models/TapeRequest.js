const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: { type: String },
  productName: { type: String },
  productDetail: { type: String },
  sideA: { type: String },
  sideB: { type: String },
  opProduct: { type: String },
  allProduct: { type: String,default: "All" },
  statusProduct: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now } // Remove the parentheses after Date.now
}, {
  collection: "TapesCass"
});

module.exports = mongoose.model("tape", productSchema);
