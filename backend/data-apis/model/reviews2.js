import mongoose from "mongoose";

const { Schema, model} = mongoose;
mongoose.set('bufferCommands', false);

const reviewsSchema = new Schema({
    user: String,
    company: String,
    generalReviews:[
        {
            rating: Number,
            text: String,
            createAt: {
                type: Date,
                default: ()=>  Date.now(),
                immutable: true
            }
        }
    ],
    individualReviews: [
        {
            rating: Number,
            employeeID: String,
            text: String,
            createAt: {
                type: Date,
                default: ()=>  Date.now(),
                immutable: true
            }
        }
    ],
    recomendation: String
},
{
    autoCreate: false
}
)

const Review = model("review", reviewsSchema)

export default Review;