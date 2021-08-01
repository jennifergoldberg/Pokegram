const { Post, Comment } = require("../models");

Comment.deleteMany({}, (error, deletedComments) => {
  if (error) {
    return console.log(error);
  }
  Comment.insertMany(
    [
      {
        username: "Geodude",
        text: "I LOVE THIS POST",
        post: "610722117765661a1c58277c",
      },
      {
        username: "Squirtle",
        text: "Looking almost as good as me!",
        post: "610722117765661a1c58277c",
      },
      {
        username: "Vaporeon",
        text: "Wish I could be there",
        post: "610722117765661a1c58277c",
      },
    ],
    function (error, createdComments) {
      if (error) {
        return console.log(error);
      }
      console.log("=== Seed Complete ===");
      console.log(createdComments);
    }
  );
});
