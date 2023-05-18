const cors = require("cors");
const express = require("express");
const TapeRouter = require("./routes/tape.route");
const MongoConnection = require("./connection/db");

const PORT = 3000;

async function main() {
  try {
    const app = express();
    await MongoConnection();

    app.use(express.json());
    app.use(cors());

    app.use(TapeRouter);

    app.listen(PORT, () => {
      console.log("Server started on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
}

main();
