require("../config/db.connection");
const mongoose = require("mongoose")

mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/pokegram');

module.exports = {
  Post: require("./Post"),
  Comment: require("./Comment"),
};