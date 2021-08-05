require("../config/db.connection");

mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/pokegram');

module.exports = {
  Post: require("./Post"),
  Comment: require("./Comment"),
};