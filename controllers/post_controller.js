const express = require("express");
const router = express.Router();

const { Post, Comment } = require("../models");

// index route - GET
router.get('/', (req, res) => {
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
router.get('/new', (req, res) => {
  const context = {};
  return res.render('new', context);
});

// create - functional - POST
router.post('/new', async (req, res) => {
  try { 
    const createdPost = await Post.create(req.body);
    return res.redirect("/")
  } catch (error) {
    const context = {
      error,
    }
    return res.render('/', context);
  }
});

// router.post("/new", (req, res) => {
//   const newPost = {
//     username: req.body.username,
//     image: req.body.image,
//     text: req.body.text
//   }
//   Post.create(newPost, (error, createdPost) => {
//     if (error){
//       return res.send(error);
//     }
//     return res.redirect("/posts");
//   })
// });

// show route - presentational - GET
router.get('/:id', async (req, res, next) => {
  try {
    const foundPost = await Post.findById(req.params.id);
    const foundComment = await Comment.find({ post: req.params.id });
    const context = {
      post: foundPost,
      comment: foundComment,
    };
    return res.render('show', context);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

// edit route - presentational - GET
router.get("/:id/edit", (req, res, next) => {
  Post.findById(req.params.id, (error, foundPost) => {
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }

    const context = {
      post: foundPost,
    };

    return res.render("/:id", context);
  });
});

// update route - functional - PUT 
router.put("/:id", (req, res, next) => {
  Post.findByIdAndUpdate( req.params.id, { $set: req.body, }, { new: true, }, (error, updatedPost) => {
      if (error) {
        console.log(error);
        req.error = error;
        return next();
      }
      
      return res.redirect(`/${updatedPost.id}`);
    }
  );
});

// destroy route - functional - DELETE
router.delete('/:id', async (req, res, next) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    await Comment.deleteMany({post: req.params.id});
    return res.redirect("/posts");
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

module.exports = router;