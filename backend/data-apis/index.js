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
    //routes
    app.post('/user-data', controller.sendUserData);
    app.post('/user', controller.createNewUser);
    app.patch('/user/:id', controller.updateUserRewards);
    app.listen(8000, ()=>{
        console.log("server has started at port 8000");
    });
    app.post('/company', controller.createCompany);
    app.get('/company/:id', controller.getRelevantData);
    app.get('/employees/:id', controller.getEmployeedata);
    app.get('/allEmployees/:id', controller.allEmployees);
    app.get('/random/:id', controller.randomComments);

    //data analysis
}).catch(()=>{
    console.log("can't connect to database");
});