import mongoose  from "mongoose";

const { Schema, model} = mongoose;

const companiesSchema = new Schema({
    title: String,
    reviews: [String],
    ratings: [Number],
    employees: [String],

});


const employeesSchema = new Schema({
    name: String,
    department: String,
    ratings: [Number],
    comments: [String]
});

const rewardSchema = new Schema({
    customerID: String,
    rewardToken: Number
});
const employees = model('employee', employeesSchema);
const companies = model('company', companiesSchema);
const rewards = model('reward', rewardSchema );

const db = { employees,companies, rewards};


export default db;

