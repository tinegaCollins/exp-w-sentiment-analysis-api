import mongoose from "mongoose";
import { Company } from "../../types/company";

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    totalReviews: {
        type: Number,
        required: false,
    },
    last6HoursReviews: {
        type: Number,
        required: false,
    },
    happyClients: {
        type: Number,
        required: false,
    },
    unSatisfiedClients: {
        type: Number,
        required: false,
    },
});

export default mongoose.model<Company>("Company", companySchema);
