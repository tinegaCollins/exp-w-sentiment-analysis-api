const userData = require("../models/user-data.js");
const user = require("../models/users.js");
const company = require("../models/company.js")

exports.sendUserData = async (req, res)=>{
    const newData = await userData(req.body);
    await newData.save();
    res.send(newData);
}
exports.updateUserRewards = async (req, res)=>{
    try{
        const singleUser = await user.findOne({ "userID" : `${req.params.id}` })
        let newReward = {
            "userID": `${req.params.id}`,
            reward : singleUser.reward + 100
        }
        Object.assign(singleUser , newReward);
        await singleUser.save();
        res.send(singleUser)
    }
    catch {
        res.status(404).send({error : "not found"})
    }
}
exports.createNewUser = async (req, res)=>{
    const newUser = await user(req.body);
    await newUser.save();
    res.send(newUser)
}
//dashboard

exports.createCompany = async (req, res)=>{
    const newCompany = await company(req.body);
    await newCompany.save();
    res.send(newCompany._id);
}
exports.getRelevantData = async (req, res)=>{
    const data = await company.findById(req.params.id);
    const relevantData = {
        rating: data.overallRating,
        last6Hours: [3,7,8,3,2,6],
        generalMood: data.generalMood,
        ctsr: data.customerSatisfactoryRate
    }
    res.send(relevantData)
}
exports.getEmployeedata = async (req, res)=>{
    const data = await company.findById(req.params.id);
    res.send(data.employees)
}