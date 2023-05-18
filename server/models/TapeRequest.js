const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let productSchema = new Schema(
  {
    name: { type: String },
    details: { type: String },
    sideA: { type: String },
    sideB: { type: String },
    options: { type: String },
  },
  { collection: "tape" }
);

module.exports = mongoose.model("tape", productSchema);
