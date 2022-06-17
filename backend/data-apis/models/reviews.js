const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    rating: [{
        rate: Number,
        createdAt: Date.now()
    }],
    reviews: [{
        review: String,
        createdAt: Date.now()
    }],
    recommendations: [{
        recommendation: String,
        createdAt: Date.now()
    }],
});

const reviews = mongoose.model("reviews", reviewSchema);