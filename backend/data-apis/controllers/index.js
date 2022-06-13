const userData = require("../models/user-data.js");
const user = require("../models/users.js");

exports.sendUserData = async (req, res)=>{
    const newData = await userData(req.body);
    await newData.save();
    res.send(newData);
}
exports.updateUserRewards = async (req, res)=>{
    try{
        const singleUser = await user.findOne({ "userID" : `${req.params.id}` })
        Object.assign(singleUser , req.body);
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