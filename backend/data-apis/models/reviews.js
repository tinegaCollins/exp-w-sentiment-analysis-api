import mongoose from "mongoose";

const { Schema, model } = mongoose;

const reviewsSchema =  new Schema({
    review: String,
    time: ()=>Date.now,
    rating: Number,
    company: String
})

const Reviews = model('Review', reviewsSchema); 
export default Reviews;