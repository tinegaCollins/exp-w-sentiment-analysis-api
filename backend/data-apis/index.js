import mongoose from "mongoose";
// import Companies from './models/companies.js';
// import rewards from './models/rewards.js';
// import employees from "./models/employees.js";

import Reviews from './models/reviews'


let connectionUrl = "mongodb+srv://CEMS_admin:pass@cems.5le7maf.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connectionUrl)

const newReview = new Reviews ({
    review: "hte quick brown fox jumped over the lazy dogs",
    rating: 3,
    company: 'ujhffdnhgit'
})

await newReview.save();

const newrev = await Reviews.findOne({})
console.log(newrev)