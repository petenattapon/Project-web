const express = require("express");
const router = express.Router();
const TapeModel = require("../models/TapeRequest");
const multer = require('multer');

// Images
let storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  }
});

let upload = multer({
  storage: storage,
}).single('image');

// Create a product
router.post("/requests/tapes", upload, async (req, res, next) => {
  const { productName, productDetail, sideA, sideB, opProduct } = req.body;

  const tape = new TapeModel({
    productName,
    productDetail,
    sideA,
    sideB,
    opProduct,
    image: req.file ? req.file.filename : null,
    createdAt: Date.now(),
    statusProduct: false, // กำหนดค่าเริ่มต้นของ statusProduct เป็น false
  });

  try {
    await tape.save();
    res.json({ message: "Tape created successfully", tapeId: tape._id }); // เพิ่มการส่ง ID ของเทปที่ถูกสร้างขึ้น
  } catch (error) {
    next(error);
  }
});

// Get Data for show display
router.get("/requests/get_tapes", async (req, res, next) => {
  try {
    const tape = await TapeModel.find();
    res.json(tape);
  } catch (error) {
    next(error);
  }
});

// Get a specific tape product by ID
router.get("/requests/get_tapes/:id", async (req, res, next) => {
  try {
    const tapeId = req.params.id;
    const tape = await TapeModel.findById(tapeId);
    res.json(tape);
  } catch (error) {
    next(error);
  }
});

// Delete Product by ID
router.delete("/requests/delete_tape/:id", async (req, res, next) => {
  try {
    const tapeId = req.params.id;
    const tape = await TapeModel.findByIdAndDelete(tapeId);
    res.json({ message: "Tape deleted successfully" });
  } catch (error) {
    next(error);
  }
});

router.put('/update/tapes/:id', async (req, res, next) => {
  try {
    const tapeId = req.params.id;
    const updateData = {
      productName: req.body.productName,
      productDetail: req.body.productDetail,
      sideA: req.body.sideA,
      sideB: req.body.sideB,
      opProduct: req.body.opProduct,
    };

    const tape = await TapeModel.findByIdAndUpdate(tapeId, updateData);
    res.json({ message: 'Tape updated successfully' });
  } catch (error) {
    next(error);
  }
});

router.put('/update/tapes/:id/status', async (req, res, next) => {
  try {
    const tapeId = req.params.id;
    const { statusProduct } = req.body;
    const tape = await TapeModel.findByIdAndUpdate(tapeId, { statusProduct });
    res.json({ message: 'Status updated successfully' });
  } catch (error) {
    next(error);
  }
});





module.exports = router;
