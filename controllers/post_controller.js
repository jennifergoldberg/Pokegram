const express = require("express");
const router = express.Router();

const { Post } = require("../models");

// index route - GET
router.get('/posts', (req, res) => {
  Post.find({}, (error, allPosts) => {
    if(error) {
      console.log(error);
      req.error = error;
      return next();
    };
    const context = {
      post: allPosts,
    };
    return res.render("index", context);
  });
});

// new route - presentational - GET
router.get('/posts/new', (req, res) => {
  const context = {};
  return res.render('new', context);
});

// create - functional - POST
// router.post('/posts/new', async (req, res) => {
//   try { 
//     const createdPost = await Post.create(req.body);
//     return res.redirect("/")
//   } catch (error) {
//     const context = {
//       error,
//     }
//     return res.render('new', context);
//   }
// });

router.post("/posts/new", (req, res) => {
  const newPost = {
    username: req.body.username,
    image: req.body.image,
    text: req.body.text
  }
  Post.create(newPost, (error, createdPost) => {
    if (error){
      return res.send(error);
    }
    return res.redirect("/posts");
  })
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