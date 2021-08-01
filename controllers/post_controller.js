const express = require("express");
const router = express.Router();

const { Post } = require("../models");

// index route - GET
router.get('/', (req,res) => {
  res.send("I am the index route");
});

// new route - presentational - GET
router.get('/posts/new', (req, res) => {
  res.send("I am the new route");
});

// create - functional - POST
router.post('/', (req, res)=> {
  res.render('new.ejs');
});

// show route - presentational - GET
router.get('/posts/:id', (req, res) => {
  res.send("this is the show route");
});


module.exports = router;