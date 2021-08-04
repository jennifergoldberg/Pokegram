const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  avatar: {
    type: String,
    //required: [true, "Please choose an Avatar from the dropdown menu"]
  },
  username: {
    type: String,
    max: 20,
    required: [true, "Your Poképost must have a username"],
  },
  image: {
    type: String,
    required: [true, "Your Poképost must have an image"],
  },
  like: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    required: [true, "Your Poképost must have text"],
    max: 144,
  },
},
{
  timestamps: true,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;