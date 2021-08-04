const express = require("express");
const router = express.Router();

const { Comment, Post } = require("../models");

// create - POST - functional

// router.post("/", (req, res, next) => {
//   Comment.create(req.body, (error, createdComment) => {
//     if(error) {
//       console.log(error);
//       req.error = error;
//       return next();
//     }
//     return res.redirect('/')
//   })
//   // res.send("comment");
// });

router.post("/:id", async (req, res) => {
  try { 
    const createdComment = await Comment.create(req.body);
    const context = {
      comment: createdComment
    }
    return res.redirect(`/${post.id}`)
  } catch (error) {
    const context = {
      error,
    }
    return res.render('index', context);
  }
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