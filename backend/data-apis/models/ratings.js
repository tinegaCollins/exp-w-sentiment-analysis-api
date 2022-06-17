const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
    companyID: String,
    rating: [{
        rate: Number,
        created: {
            type: Date,
            default: Date.now
        }
    }]
});

module.exports = mongoose.model("rating", ratingSchema);