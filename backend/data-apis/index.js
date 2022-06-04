import mongoose from "mongoose";
import express from 'express'
import db from './model/companies.js'


const app = express();
const PORT = 8080;

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});


app.get('/:id',(req,res)=>{
    console.log(db.companies.findById(req.params.id,"title").exec());
})



mongoose.connect("mongodb+srv://CEMS_admin:pass@cems.5le7maf.mongodb.net/?retryWrites=true&w=majority")


// const camp = await companies.create({
//     title: 'fresh pickens',
//     reviews: 'qwerty',
//     employees: ['12','34','67']
// });

// camp.title = "coles company";
// camp.save();


//to return a specific query
// const camp = await db.companies.findById("629b115960ed3c720a770b18","title").exec();
// to delete 

// const campDelete = await companies.deleteOne({ title : 'coles company'})
// console.log(camp);


