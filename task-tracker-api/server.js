const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();

const dbConnectionString = process.env.DB_CONNECTION_STRING || "mongodb+srv://<username>:<password>@<your-cluster-url>/<database-name>?retryWrites=true&w=majority";

// Connecting with mongo db
mongoose
  .connect(dbConnectionString)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.message)
  })

// Setting up port with express js
const taskRoute = require("../task-tracker-api/routes/task.route");
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist/task-tracker-api')))
app.use('/', express.static(path.join(__dirname, 'dist/task-tracker-api')))
app.use("/api/tasks", taskRoute);

// Create port
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message); // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});
