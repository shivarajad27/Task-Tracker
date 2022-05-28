const { MongoClient, ServerApiVersion } = require("mongodb");

const connectionString = "mongodb+srv://shivarajad27:Shivaraja%40270295@tasktracker.j6469.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

let dbConnection;

const connectToServer = (callback) => {
  client.connect((err, db) => {
    if (err || !db) {
      console.log("Error while connect to MongoDB.", err.message);
      return callback(err);
    }

    dbConnection = db.db("TaskTracker");
    console.log("Successfully connected to MongoDB.");

    return callback();
  });
};

const getDb = function () {
  return dbConnection;
};

module.exports = { connectToServer, getDb };
