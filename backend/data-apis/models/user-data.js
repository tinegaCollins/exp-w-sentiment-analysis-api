const mongoose = require("mongoose");

const schema = new  mongoose.Schema({
    userID: String,
    companyID: String,
    rating: Number,
    generalDescrition: String,
    recomendation: String,
    employeeData: [
        {
            employeeID: String,
            rating: Number,
            descrition: String
        }
    ]
})

module.exports = mongoose.model("review", schema)