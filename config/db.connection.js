const mongoose = require("mongoose");

const connectionString = 'mongodb://localhost:27017/pokegram'

mongoose.connect(connectionString, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

mongoose.connection.on("connected", () => {
  console.log(`${new Date().toLocaleTimeString()} MongoDB connected... 👏👏👏`);
});

mongoose.connection.on("error", (error) => {
  console.log("MongoDB connection error... 🤬 🤬 🤬", error);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected... 😭 😭 😭");
});