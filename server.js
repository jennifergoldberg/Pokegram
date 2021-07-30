// External Modules
const express = require("express");
const methodOverride = require("method-override");

// Module instance
const app = express();

// PORT
const PORT = 3000;

// Internal Modules
const controllers = require("./controller");

// App config
app.set("view engine", "ejs");

// Mongodb connecton
app.use("./config/db.connection.js");

// Logger middleware
module.exports = function logger(req, res, next) {
  console.log(`${req.url}: ${req.method} - ${new Date().toLocaleDateString()}`);
  console.log(req.session);
  next();
};


// 404
app.get("/*", (req, res) => {
  const context = {
    error: req.error,
  },
  return res.render("404", context);
})

app.listen(PORT, () => {
  console.log(`WE LITTY HERE ON PORT ${PORT}`);
});