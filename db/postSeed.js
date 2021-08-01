const { Post, Comment } = require("../models");

Post.deleteMany({}, (error, deletedPosts) => {
  if (error) {
    return console.log(error);
  }
  Post.insertMany(
    [
      {
        username: "Pikachu",
        avatar: "../public/assets/_pikachu.png",
        image: "https://secure.img1-fg.wfcdn.com/im/77981853/resize-h755-w755%5Ecompr-r85/8470/84707680/Pokemon+Pikachu+Wall+Decal.jpg",
        likes: 0,
        text: "Hey guys! Here is a selfie of me!",
      },
      {
        username: "Charizard",
        avatar: "../public/assets/_charmander.png",
        image: "http://speed-new.com/wp-content/uploads/2015/02/56845754734642.jpg",
        likes: 0,
        text: "ITS LITTY OUT HERE. GANG GANG.",
      },
      {
        username: "Ash",
        avatar: "../public/assets/_abra.png",
        image: "https://static.fandomspot.com/images/12/11046/00-featured-misty-starmie-battle-in-gym.jpg",
        likes: 0,
        text: "Here at the gym getting my workout",
      },
    ],
    function (error, createdPosts) {
      if (error) {
        return console.log(error);
      }
      console.log("=== Seed Complete ===");
      console.log(createdPosts);
    }
  );
});