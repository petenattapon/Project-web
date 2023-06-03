const express = require("express");
const router = express.Router();

const TapeModel = require("../models/TapeRequest");

// Create a product
router.post("/requests/tapes", async (req, res, next) => {
  const { productName, productDetail, sideA, sideB, opProduct } = req.body;

  const tape = new TapeModel({
    productName,
    productDetail,
    sideA,
    sideB,
    opProduct,
  });

  await tape.save();

  res.json({ message: "Tape created successfully" });
});


router.get("/requests/tapes", async (req, res, next) => {
  try {
    const tape = await TapeModel.find();
    res.json(tape);
  } catch (error) {
    next(error);
  }
});

// Get Data for show disply
router.get("/requests/get_tapes", async (req, res, next) => {
  try {
    const tape = await TapeModel.find();
    res.json(tape);
  } catch (error) {
    next(error);
  }
})


// Delete Product by id
router.delete("/requests/delete_tape/:id", async (req, res, next) => {
  try {
    const tapeId = req.params.id;
    const tape = await TapeModel.findByIdAndDelete(tapeId);
    res.json({ message: "Tape created successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
