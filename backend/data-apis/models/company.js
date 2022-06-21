const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    ratings: Number,
    reviews: String,
    recommendations: String,
    topThreeEmployees: [String],
    lastMonth: [Number],
    customerSatisfaction: Number,
    sampleComments: [String],
    sampleRecommendations: [String],
});

module.exports = mongoose.model('Company', companySchema);