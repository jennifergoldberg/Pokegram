const express = require("express");
const router = express.Router();

// create - POST - functional

router.post('/posts/:id', (req, res) => {
  res.send("comment");
});

// update - PUT - functional

router.put('/posts/:id', (req, res) => {
  res.send("update comments");
});

// destroy - DELETE - functional

router.delete('/:id', async (req, res, next) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    return res.redirect("/posts")
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

module.exports = router;