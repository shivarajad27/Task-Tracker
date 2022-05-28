const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema
const Task = new Schema(
  {
    name: {
      type: String,
    },
    priority: {
      type: Number,
    },
    startDateTime: {
      type: Date,
    },
    endDateTime: {
      type: Date,
    },
    creationTime: {
      type: Date,
    },
    modificationTime: {
      type: Date,
    },
  },
  {
    collection: "tasks",
  }
);

module.exports = mongoose.model("Task", Task);
