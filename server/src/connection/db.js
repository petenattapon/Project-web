const mongoose = require("mongoose");

async function MongoConnection() {
  await mongoose.connect("mongodb://127.0.0.1:27017/nutthanon");
  console.log("Connected to MongoDB");
}

module.exports = MongoConnection;
