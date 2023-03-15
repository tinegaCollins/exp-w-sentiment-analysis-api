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
        default: 0,
    },
    last6HoursReviews: {
        type: Number,
        required: false,
        default: 0,
    },
    happyClients: {
        type: Number,
        required: false,
        default: 0,
    },
    unSatisfiedClients: {
        type: Number,
        required: false,
        default: 0,
    },
});

export default mongoose.model<Company>("Company", companySchema);
