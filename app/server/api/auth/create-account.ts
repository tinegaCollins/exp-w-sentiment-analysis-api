import company from "~~/server/models/company";
import { Company } from "../../../types/company";

export default defineEventHandler(async (event) => {
    const { email, password, name } = await readBody<Company>(event);
    try {
        const newCompany = new company({
                email,
                password,
                name,
            }),
            savedCompany = await newCompany.save();
        return {
            status: 200,
            body: savedCompany._id,
        };
    } catch (err) {
        console.log(err);
        return {
            status: 400,
            body: err,
        };
    }
});