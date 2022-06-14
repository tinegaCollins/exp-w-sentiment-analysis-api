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
    try{
        const data = await company.findById(req.params.id);
        const relevantData = {
            rating: data.overallRating,
            last6Hours: [3,7,8,3,2,6],
            generalMood: data.generalMood,
            ctsr: data.customerSatisfactoryRate
        }
        res.send(relevantData)
    }catch{
        res.status(404).send({error : "not found"})
    }
}
exports.getEmployeedata = async (req, res)=>{
    try{
        const data = await company.findById(req.params.id);
        res.send(data.employees)
    }catch{
        res.status(404).send({error : "not found"})
    }
}
exports.allEmployees = async (req, res)=>{
    try{
        const data = await company.findById(req.params.id);
        const employees = await data.employees;
        res.send(employees);
    }catch {
        res.status(404).send({error : "not found"})
    }
}
exports.randomComments = async (req, res)=>{
    try{
        let comments = await userData.find({companyID: req.params.id}, 'generalDescrition');
        //find random 
        function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let i = 0;
        const randomComments = [];
        while(i < 3){
            let result = randomNumber(0,comments.length - 1);
            randomComments.push(comments[result]);
            i++;
        }
        res.send(randomComments);
    }
    catch{
        res.status(404).send({error : "not found"})
    }
}

