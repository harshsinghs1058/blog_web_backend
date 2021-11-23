const db = require("mongoose");

//schema for user data in mongodb
const blogSchema = new db.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  blogBody: {
    type: String,
    required: true,
  },
  imgURL: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date(),
  },
  comments: [
    {
      comment: {
        type: String,
      },
      commentatorName: {
        type: String,
      },
    },
  ],
});
const blog = db.model("blog", blogSchema);
module.exports = blog;
