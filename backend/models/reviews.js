const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    companyID: String,
    reviews: [{
        review: String,
        created: {
            type: Date,
            default: Date.now
        }
    }]
});

module.exports = mongoose.model("review", reviewSchema);