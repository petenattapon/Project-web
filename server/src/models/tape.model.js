const mongoose = require("mongoose");

const tapeSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("Tapes", tapeSchema);
