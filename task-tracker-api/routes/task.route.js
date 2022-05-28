const express = require("express");
const app = express();
const taskRoute = express.Router();

// Task model
let Task = require("../models/Task");

// Add Task
taskRoute.route("/create").post(async (req, res, next) => {
  Task.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get All Task
taskRoute.route("/").get((req, res) => {
  Task.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get single task
taskRoute.route("/:id").get((req, res) => {
  Task.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update task
taskRoute.route("/update/:id").put((req, res, next) => {
  Task.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Data updated successfully");
      }
    }
  );
});

// Delete task
taskRoute.route("/delete/:id").delete((req, res, next) => {
  Task.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = taskRoute;
