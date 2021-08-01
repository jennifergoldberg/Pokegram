// External Modules
const express = require("express");
const methodOverride = require("method-override");

// Module instance
const app = express();

// PORT
const PORT = 3000;

// Internal Modules
const controllers = require("./controllers");

// App config
app.set("view engine", "ejs");

// Mongodb connecton
app.use("./config/db.connection.js");

// Middleware

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));

app.use(methodOverride("_method"));

app.use(function logger(req, res, next) {
  console.log(`${req.url}: ${req.method} - ${new Date().toLocaleTimeString()}`);
  // only console.log(req.session) when we have user auth sessions
  next();
});

// 404
app.get("/*", (req, res) => {
  const context = {
    error: req.error,
  };
  res.render("404", context);
});

app.listen(PORT, () => {
  console.log(`WE LITTY HERE ON PORT ${PORT}`);
});