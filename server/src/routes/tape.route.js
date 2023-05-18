const express = require("express");
const router = express.Router();

const TapeModel = require("../models/tape.model");

router.post("/requests/tapes", async (req, res, next) => {
  const { name } = req.body;

  const tape = new TapeModel({
    name,
  });

  await tape.save();

  res.json({ message: "Tape created successfully" });
});

module.exports = router;
