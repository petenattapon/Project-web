const express = require("express");
const router = express.Router();

const TapeModel = require("../models/TapeRequest");

router.post("/requests/tapes", async (req, res, next) => {
  const { productName, productDetail, sideA, sideB, opProduct } = req.body;

  const tape = new TapeModel({
    productName,
    productDetail,
    sideA,
    sideB,
    opProduct
  });

  await tape.save();

  res.json({ message: "Tape created successfully" });
});

module.exports = router;