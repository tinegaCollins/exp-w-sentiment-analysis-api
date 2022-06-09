import mongoose from "mongoose";
import express from 'express'
import Companies from './models/companies.js'
import rewards from './models/rewards.js'
import employees from "./models/employees.js";



const app = express();
const PORT = 8080;

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});

mongoose.connect("mongodb+srv://CEMS_admin:pass@cems.5le7maf.mongodb.net/?retryWrites=true&w=majority")

console.log(mongoose.connection)

const newData = new Companies({
    title: 'tinega owned',
    reviews: ["fuck off","ima not here"],
    ratings: [3,4,6,2,7],
    employees: ['ghjk','tyuiop']
})

await newData.save()
