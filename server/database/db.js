const mongoose = require("mongoose");

async function MongoConnection() {
  await mongoose.connect("mongodb://127.0.0.1:27017/reactive");
  console.log("Connected to MongoDB");
}

module.exports = MongoConnection;