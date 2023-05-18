let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
let dbConfig = require("./database/db");
let path = require("path");

// Express Route
const tttt = require("../server/routes/tape.route");

// Connecting MongDB Database
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
    // useUnifiedTopology: true
  })
  .then(
    () => {
      console.log("Database successfully connected");
    },
    (error) => {
      console.log("Could not connect to database: " + error);
    }
  );

const app = express();
app.use(express.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );
app.use(cors());
app.use("/tapes", tttt);

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../build')))

//     app.get("*", (req, res) => {
//         res.sendFile(path.join(__dirname, "../build/index.html"))
//     })
// }

// PORT
const port = process.env.PORT || 8552;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
