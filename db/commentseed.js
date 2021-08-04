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
        post: "6108d96c8ae00b3854d65535",
      },
      {
        username: "Squirtle",
        text: "Looking almost as good as me!",
        post: "6108d96c8ae00b3854d65535",
      },
      {
        username: "Vaporeon",
        text: "Wish I could be there",
        post: "6108d96c8ae00b3854d65535",
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
