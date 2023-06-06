const cors = require("cors");
const express = require("express");
const TapeRouter = require("./routes/tape.route");
const UserData = require('./routes/regis.route');
const MongoConnection = require("./database/db");
const path = require("path"); // Add this line

const PORT = 4000;

async function main() {
  try {
    const app = express();
    await MongoConnection();

    // Show uploaded images
    app.use(express.static("uploads"));

    app.use(express.json());
    app.use(cors());

    app.use(TapeRouter);
    app.use(UserData);

    // Add this middleware to serve the static files
    app.use("/uploads", express.static(path.join(__dirname, "uploads")));

    app.listen(PORT, () => {
      console.log("Server started on port 4000");
    });
  } catch (error) {
    console.log(error);
  }
}

main();
