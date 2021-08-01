const express = require("express");
const router = express.Router();

const { Post } = require("../models");

// index router
router.get('/', (req,res) => {
  res.send("I am the index route");
});



module.exports = router;