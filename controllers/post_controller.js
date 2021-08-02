const express = require("express");
const router = express.Router();

const { Post } = require("../models");

// index route - GET
router.get('/', (req, res) => {
  res.send("I am the index route");
});

// new route - presentational - GET
router.get('/posts/new', (req, res) => {
  res.send("I am the new route");
});

// create - functional - POST
router.post('/', (req, res) => {
  res.render('new.ejs');
});

// show route - presentational - GET
router.get('/posts/:id', (req, res) => {
  res.send("this is the show route");
});

// edit route - presentational - GET
router.get('/posts/:id/edit', (req, res) => {
  res.render('edit.ejs');
});

// update route - functional - PUT 
router.put('/posts/:id', (req, res) => {
  res.send('update');
});

// destroy route - functional - DELETE
router.delete('/posts/:id', (req, res) => {
  res.send('delete');
});

module.exports = router;