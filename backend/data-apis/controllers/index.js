const ratings = require("../models/ratings.js");
const reviews = require("../models/reviews.js");
const recommendations = require("../models/recommendations.js");
const employees = require("../models/employees.js");
const company = require("../models/company.js");

let text;
exports.sendRatings = async (req, res) => {
    try{
        await ratings.updateOne(
            { companyID: req.body.companyID },
            {
            $push: {
                rating: {
                    rate: req.body.rate,
                    created: Date.now()
                }
            }
            }
        );
        const allRatings = await ratings.find({ companyID: req.body.companyID }).select("rating");
        let rates = allRatings[0].rating.map(rate => rate.rate);
        let average = rates.reduce((a, b) => a + b, 0)/rates.length;
        average = Math.round(average);
        await company.updateOne(
            { _id: req.body.companyID },
            {
                $set: {
                    ratings: average
                }
            }
        );
        await res.send(true);
    }
    catch(err){
        console.log(err);
        res.send(false);
    }
}

exports.getRatings = async (req, res) => {
    try{
        const data = await ratings.findOne({ companyID: req.params.id });
        res.send(data);
    }
    catch(err){
        console.log(err);
    }
};

exports.sendReviews = async (req, res) => {
    try{
        await reviews.updateOne(
            { companyID: req.body.companyID },
            {
            $push: {
                reviews: {
                    review: req.body.review,
                    created: Date.now()
                }
            }
            }
        );
        await res.send(true);
    }
    catch(err){
        res.send(false);
    }
}


exports.getReviews = async (req, res) => {
    try{
        const data = await reviews.findOne({ companyID: req.params.id });
        res.send(data);
    }
    catch(err){
        console.log(err);
    }
}

exports.sendRecommendations = async (req, res) => {
    try{
        await recommendations.updateOne(
            { companyID: req.body.companyID },
            {
            $push: {
                recommendations: {
                    recommendation: req.body.recommendations.recommendation,
                    created: Date.now()
                }
            }
            }
        );
        await res.send(true);
    }
    catch(err){
        console.log(err);
        res.send(false);
    }
}

exports.getRecommendations = async (req, res) => {
    try{
        const data = await recommendations.findOne({ companyID: req.params.id });
        res.send(data);
    }
    catch(err){
        console.log(err);
    }
}

exports.sendEmployeeData = async (req, res) => {
    try{
        await employees.updateOne(
            { _id: req.params.id },
            {
            $push: {
                ratings: {
                    rating: req.body.rating
                }
            }
            }
        );
        await employees.updateOne(
            { _id: req.params.id },
            {
                $push: {
                    reviews: {
                        review: req.body.review
                    }
                }
            }
        );
        await res.send(true);
    }
    catch(err){
        console.log(err);
        res.send(false);
    }
}

exports.getEmployeeData = async (req, res) => {
    try{
        const data = await employees.findById(req.params.id);
        res.send(data);
    }
    catch(err){
        console.log(err);
    }
}

exports.createNewEmployee = async (req, res) => {
    try{
        const newEmployee = new employees(req.body);
        await newEmployee.save();
        await res.send(true);
    }
    catch(err){
        console.log(err);
        res.send(false);
    }
}

exports.getAllEmployees = async (req, res) => {
    try{
        // get data with req.body.id
        const data = await employees.find({ companyID: `${req.params.companyID}` });
        res.send(data);
    }
    catch(err){
        console.log("found  none");
        console.log(err);
    }
}


exports.createCompany = async (req, res) => {
    const newCompany = new company(req.body);
    await newCompany.save();
    const companyId = await newCompany._id;
    const newRating = {
        companyID: companyId,
        rating: []
    }
    await ratings.create(newRating);
    const newreview = {
        companyID: companyId,
        reviews: []
    }
    await reviews.create(newreview);
    const newrecommendation = {
        companyID: companyId,
        recommendations: []
    }
    await recommendations.create(newrecommendation);
    res.send(true);
}