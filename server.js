// External Modules
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

// Module Instance
const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Internal Modules
const controllers = require("./controllers");

// App config
app.set("view engine", "ejs");

// Mongodb connecton
// const dbConnection = require("./config/db.connection.js");

// Middleware

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));

app.use(methodOverride("_method"));

app.use(function logger(req, res, next) {
  console.log(`${req.url}: ${req.method} - ${new Date().toLocaleTimeString()}`);
  // only console.log(req.session) when we have user auth sessions
  next();
});

// routes
app.use('/', controllers.post);
app.use('/', controllers.comment);

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