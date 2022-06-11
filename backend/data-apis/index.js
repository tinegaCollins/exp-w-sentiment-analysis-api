import mongoose from "mongoose";
import express from "express";
import Review from "./models/reviews.js";
import employee from "./models/employees.js"
import company from "./models/companies.js"


const app = express();
const PORT = 3000;

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});

await mongoose.connect("mongodb+srv://CEMS_admin:pass@cems.5le7maf.mongodb.net/?retryWrites=true&w=majority")
// const newReview = await Review.create({
//     user: "lincoln kiptoo",
//     company: "no shitty bussiness",
//     generalReviews: [
//         {
//             rating: 5,
//             text: "mid level performance",
//         }
//     ],
//     individualReviews: [
//         {
//             rating: 7,
//             employeeID: "tryjhf",
//             text: "best service ever"
//         }
//     ],
//     recomendation: "cleaner bathrooms "
// })

app.get('/reviews',(req,res)=>{
    let reviews = [];
    reviews = Review.find({});
    console.log(reviews);
})
//  console.log(newReview);

//  const newEmployee = await employee.create({
//     name: "kygo wrabel",
//     department: "department of it",
//     rating: 5,
//     mostComment: "dull and boring",
//     company: "hrfiuhrghegpkjgo"
//  })

//  console.log(newEmployee)

// const newCompany = await company.create({
//     name: "fresh Pickens",
//     rating: 7,
//     comments: ["this comany sucks", "models to determine the truth"]
// })
// const one = await Review.findById("62a45094579ac1b2996dd114").exec()
// one.user = "say you will";
// await one.save();
// console.log(one);