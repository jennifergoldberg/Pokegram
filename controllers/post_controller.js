const express = require("express");
const router = express.Router();

const { Post } = require("../models");


router.get("/posts", (req, res) => {
  res.send("Hello there");
});

router.get("/new", (req, res) => {
  
})


module.exports = router;