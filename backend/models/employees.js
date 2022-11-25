const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    companyID: String,
    name: String,
    image: String,
    department: String,
    ratings: [
        {
            rating: Number,
            createdAt: {
                type: Date,
                default: Date.now()
            }
        }
    ],
    reviews: [
        {
            review: String,
            createdAt: {
                type: Date,
                default: Date.now()
            }
        }
    ],
    averageRating: Number,
});

module.exports = mongoose.model('Employee', employeeSchema);
