import mongoose  from "mongoose";

const { Schema, model} = mongoose;

const rewardSchema = new Schema({
    customerID: String,
    rewardToken: Number
});

const rewards = model('reward', rewardSchema );

export default rewards