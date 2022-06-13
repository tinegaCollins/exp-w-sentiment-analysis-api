const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    companyDetails: {
        title: String,
        email: String,
        password: String
    },
    overallRating: Number,
    hourlyData: [
        {
            rating: Number,
            time: String
        }
    ],
    generalMood: String,
    customerSatisfactoryRate: Number,
    employees: [
        {
            name: String,
            id: Number,
            rating: Number,
            generalMood: String
        }
    ]
})

module.exports = mongoose.model("company", schema)