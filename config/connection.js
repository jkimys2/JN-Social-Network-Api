// Import Mongoose
const { connect, connection } = require("mongoose");

// Wrap Mongoose around local connection to MongoDB
const connectString = "mongodb://127.0.0.1:27017/socialDB";
connect(connectString);

// Export connection
module.exports = connection;
