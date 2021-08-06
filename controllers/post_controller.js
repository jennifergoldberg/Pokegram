const express = require("express");
const router = express.Router();

const { Post, Comment } = require("../models");

router.get('/', async (req, res, next) => {
  try {
    const allPosts = await Post.find({});
    const allComments = await Comment.find({});
    const context = {
      post: allPosts,
      comment: allComments,
    };
    return res.render("index", context);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next()
  }
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

// update route - Likes
router.put('/likes/:id', async (req, res, next) => {
  try {
    const foundPost = await Post.findById(req.params.id);
    await Post.findByIdAndUpdate(
      req.params.id,
      { $set: { likes: !foundPost.likes } },
      { new: true })
    return res.redirect('/posts');
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

// update route - Comment likes
router.put('/comments/likes/:id', async (req, res, next) => {
  try {
    const foundComment = await Comment.findById(req.params.id);
    console.log(foundComment);
    await Comment.findByIdAndUpdate(
      req.params.id,
      { $set: { likes: !foundComment.likes } },
      { new: true })
    return res.redirect('/posts');
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});


// show route - presentational - GET
router.get('/:id', async (req, res, next) => {
  try {
    const foundPost = await Post.findById(req.params.id);
    const foundComment = await Comment.find({ post: req.params.id });
    console.log(foundPost);
    console.log(foundComment);
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

// create comment - functional - post
router.post("/addcomment/:id", async (req, res) => {
  try {
    req.body.post = req.params.id;
    const createdComment = await Comment.create(req.body);
    console.log("createdComment", createdComment);
    return res.redirect(`/posts/${req.params.id}`)
  } catch (error) {
    console.log(error);
    req.error = error;
  }
}
);

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

    return res.render("edit", context);
  });
});

// update route - functional - PUT 
router.put("/:id", (req, res, next) => {
  Post.findByIdAndUpdate(req.params.id, { $set: req.body, }, { new: true, }, (error, updatedPost) => {
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }

    return res.redirect('/');
  }
  );
});

// destroy route - functional - DELETE
router.delete('/:id', async (req, res, next) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    await Comment.deleteMany({ post: req.params.id });
    return res.redirect("/posts");
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

module.exports = router;