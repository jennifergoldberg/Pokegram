const express = require("express");
const router = express.Router();

const { Post } = require("../models");

// index route - GET
router.get('/', (req, res) => {
  res.render('index');
  // if (error) {
  //   console.log(error);
  // };
});

// new route - presentational - GET
router.get('/posts/new', (req, res) => {
  const context = {};
  return res.render('new', context);
});

// create - functional - POST
router.post('/posts/new', async (req, res, next) => {
  try {
    const createdPost = await Post.create(req.body);
    return res.redirect(`/posts/${createdPost.id}`)
  } catch (error) {
    const context = {
      error,
    };
    return res.render('/posts/new', context);
  }
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