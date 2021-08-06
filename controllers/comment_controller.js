const express = require("express");
const router = express.Router();

const { Comment, Post } = require("../models");

// update - update - functional
router.put("/:id", async (req, res, next) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(req.params.id, { $set: req.body, }, { new: true, });
    console.log(updatedComment);
    return res.redirect(`/posts/${updatedComment.post}`);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
})

// destroy - DELETE - functional

router.delete('/:id', async (req, res, next) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
    return res.redirect(`/posts/${deletedComment.post}`)
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

module.exports = router;