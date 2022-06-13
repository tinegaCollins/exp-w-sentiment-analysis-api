const mongoose = require("mongoose");

const schema = new  mongoose.Schema({
    companyID: String,
    rating: Number,
    generalDescrition: String,
    recomendation: String,
    specialDescrition: [
        {
            employeeID: String,
            rating: Number,
            descrition: String
        }
    ]
})

module.exports = mongoose.model("review", schema)