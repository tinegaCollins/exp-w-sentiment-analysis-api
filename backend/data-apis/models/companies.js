import mongoose from "mongoose";

const { Schema, model } = mongoose;
mongoose.set('bufferCommands', false);

const companySchema = new Schema({
    name: String,
    rating: Number,
    comments: [String]
},
 {
    autoCreate: false
})

const company = model('company', companySchema)

export default company;


