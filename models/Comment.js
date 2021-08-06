const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
	username: {
		type: String,
		// required: [true, "Your Poképost must have a username"],
		// max: 20,
	},
	text: {
		type: String,
		// required: [true, "Your Poképost must have text"],
		// max: 144,
	},
	post: {
		type: mongoose.Types.ObjectId,
		ref: "Post",
	},
	likes: {
		type: Boolean,
		default: false,
	},
},
	{
		timestamps: true,
	});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;