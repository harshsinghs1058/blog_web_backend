const db = require("mongoose");

//schema for user data in mongodb
const userSchema = new db.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userDesc: {
    type: String,
    default: "I am new blogger.",
  },
  userImg: {
    type: String,
    default:
      "https://www.seekpng.com/png/full/245-2454602_tanni-chand-default-user-image-png.png",
  },
});
const user = db.model("user", userSchema);
module.exports = user;
