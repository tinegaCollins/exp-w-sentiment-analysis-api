const mongoose = require("mongoose");

const recommendationSchema = new mongoose.Schema({
    companyID: String,
    recommendations: [{
        recommendation: String,
        created: {
            type: Date,
            default: Date.now
        }
    }]
});

module.exports = mongoose.model("recommendation", recommendationSchema);