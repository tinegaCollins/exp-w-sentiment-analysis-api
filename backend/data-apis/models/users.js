const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    userID: String,
    reward: Number
})

module.exports = mongoose.model('user', schema)