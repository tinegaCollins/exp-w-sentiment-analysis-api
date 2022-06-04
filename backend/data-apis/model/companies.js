import mongoose  from "mongoose";

const { Schema, model} = mongoose;

const companiesSchema = new Schema({
    title: String,
    reviews: [String],
    ratings: [Number],
    employees: [String],

});


const companies = model('company', companiesSchema);



export default companies;

