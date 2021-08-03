const express = require("express");
const router = express.Router();

const { Comment, Post } = require("../models");

// create - POST - functional

router.post("/", (req, res) => {
  Comment.create(req.body, (error, createdComment) => {
    if(error) {
      console.log(error);
      req.error = error;
      return next();
    }
    return res.redirect("/")
  })
  res.send("comment");
});

// update - PUT - functional

router.put("/:id", (req, res, next) => {
  Comment.findByIdAndUpdate( req.params.id, { $set: req.body, }, { new: true, },
    (error, updatedComment) => {
      if (error) {
        console.log(error);
        req.error = error;
        return next();
      }
      
      return res.redirect(`/${updatedComment.id}`);
    }
  );
});

// destroy - DELETE - functional

router.delete('/posts/:id', (req, res) => {
  res.send("update delete");
});

module.exports = router;