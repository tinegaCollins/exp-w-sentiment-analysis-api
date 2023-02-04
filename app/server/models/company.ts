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
});

export default mongoose.model<Company>("Company", companySchema);
