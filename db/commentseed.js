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
        post: "610b59c1106570066edda7e9",
        likes: false,
      },
      {
        username: "Squirtle",
        text: "Looking almost as good as me!",
        post: "610b59c1106570066edda7e9",
        likes: false,
      },
      {
        username: "Vaporeon",
        text: "Wish I could be there",
        post: "610b59c1106570066edda7e9",
        likes: false,
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
