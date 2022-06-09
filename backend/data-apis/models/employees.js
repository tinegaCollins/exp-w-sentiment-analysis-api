import mongoose from "mongoose";

const { Schema, model} = mongoose;

const employeesSchema = new Schema({
    name: String,
    department: String,
    ratings: [Number],
    comments: [String]
});

const employees = model('employee', employeesSchema);

export default employees;