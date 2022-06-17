const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    //link company to reviews
    reviews: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "reviews"
    },
    generalRating: {
        overall: Number,
        thisMonth: Number
    },
    generalReviews: {
        overall: String,
        thisMonth: String
    },
    generalRecommendation: {
        overall: String,
        thisMonth: String
    },
    //link company to employees
    employees: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "employees"
    }
});

const company = mongoose.model("company", companySchema);

export default company;