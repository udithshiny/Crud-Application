const mongoose = require("../configuration/dbConfig");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
});

const User = mongoose.model("user", userSchema);

module.exports = User;