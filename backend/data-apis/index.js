import mongoose from "mongoose";
import Review from "./model/reviews2.js";

await mongoose.connect("mongodb+srv://CEMS_admin:pass@cems.5le7maf.mongodb.net/?retryWrites=true&w=majority")
// creating a new object
// const anotherReview = await Review.create({
//     user: 'tinega collins',
//     company: 'asus rog 5',
//     generalReviews: [
//         {
//             rating: 3, 
//             text: "poor quality of service",
//         }
//     ],
//     individualReviews: [
//         {
//             rating: 5,
//             employeeID: "new emp",
//             text: "this guy is a good guy",
//         }
//     ],
//     recommendation: "shut the whole thing down"
// });
// const newReview = await Review.create({
//     user: "user1",
//     company: "rircbkk",
//     text: "lorem suck a dick",
//     rating: 8,
//     individualReviews: true,
//     individual: "new employee",
//     individualRating: 5,
//     individualText: "this guy sucks",
//     recommendation: "i only say that cause you are not around"
// });
// // newReview.user = "this shit sucks";
// // await newReview.save();-- edit document fields
// // returns the document added
// const last = await Review.findById
// ("62a447a7d0feacfbefdc7df3","user individual recommendation").exec();

// // console.log(last); 

// const del = await Review.deleteMany({user: "user1"});

// // console.log(del);

const newReview = await Review.create({
    user: "lincoln kiptoo",
    company: "no shitty bussiness",
    generalReviews: [
        {
            rating: 5,
            text: "mid level performance",
        }
    ],
    individualReviews: [
        {
            rating: 7,
            employeeID: "tryjhf",
            text: "best service ever"
        }
    ],
    recomendation: "cleaner bathrooms "
})
 console.log(newReview);