const mongoose = require("mongoose");
const express = require("express");
const controller = require("./controllers/index.js");
const cors = require("cors");




mongoose.connect(
    "mongodb://localhost:27017/CEMS",
    { useNewUrlParser: true }
).then(()=>{
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.patch('/rating', controller.sendRatings);
    app.get('/rating/:id', controller.getRatings);
    app.patch('/review', controller.sendReviews);
    app.get('/review/:id', controller.getReviews);
    app.patch('/recommendation', controller.sendRecommendations);
    app.get('/recommendation/:id', controller.getRecommendations);
    app.listen(8000, ()=>{
        console.log("server has started at port 8000");
    });

}).catch((err)=>{
    console.log(err);
});