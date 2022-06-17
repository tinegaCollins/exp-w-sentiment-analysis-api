const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: String,
    department: String,
    rating: [{
        rate: Number,
        createdAt: Date.now()
    }],
    reviews: [{
        review: String,
        createdAt: Date.now()
    }],
    generalRating: Number,
    generalReviews: String
});

