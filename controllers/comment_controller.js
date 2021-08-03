const express = require("express");
const router = express.Router();

const { Comment, Post } = require("../models");

// create - POST - functional

router.post('/posts/:id', (req, res) => {
  res.send("comment");
});

// update - PUT - functional

router.put('/posts/:id', (req, res) => {
  res.send("update comments");
});

// destroy - DELETE - functional

router.delete('/posts/:id', (req, res) => {
  res.send("update delete");
});

module.exports = router;