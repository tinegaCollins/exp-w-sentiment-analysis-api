import mongoose from "mongoose";

const { Schema, model } = mongoose;
mongoose.set('bufferCommands', false);

const employeesSchema = new Schema({
    name: String,
    department: String,
    rating: Number,
    mostComment: String,
    company: String
},
{
    autoCreate: false
})

const employee = model('employee', employeesSchema )

export default employee;