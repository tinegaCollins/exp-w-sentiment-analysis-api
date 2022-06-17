const ratings = require("../models/ratings.js");
const reviews = require("../models/reviews.js");
const recommendations = require("../models/recommendations.js");


exports.sendRatings = async (req, res) => {
    try{
        await ratings.updateOne(
            { companyID: req.body.companyID },
            {
            $push: {
                rating: {
                    rate: req.body.rating.rate,
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
                    review: req.body.reviews.review,
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
