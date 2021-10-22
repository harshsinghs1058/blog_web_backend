const db = require("mongoose");

//schema for user data in mongodb
const userSchema = new db.Schema({
    "name": {
        type: String,
        required: true,
    },
    "password": {
        type: String,
        required: true,
    },
    "email": {
        type: String,
        required: true,
        unique: true,
    },
});
const user = db.model("user", userSchema);
module.exports = user;