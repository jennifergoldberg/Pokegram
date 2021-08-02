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
        post: "610836e30b6a280b99ca34d0",
      },
      {
        username: "Squirtle",
        text: "Looking almost as good as me!",
        post: "610836e30b6a280b99ca34d1",
      },
      {
        username: "Vaporeon",
        text: "Wish I could be there",
        post: "610836e30b6a280b99ca34d2",
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
