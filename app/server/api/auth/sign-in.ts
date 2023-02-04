import company from "~~/server/models/company";
import { Company } from "../../../types/company";

export default defineEventHandler(async (event) => {
    const { email, password } = await readBody<Company>(event);
    try{
        company.findOne({email : email}).then((user) => {
            if (user) {
                return {
                    status: 400,
                    body: "Email already exists",
                };
            } else {
                const newCompany = new company({
                    email,
                    password,
                });
                newCompany.save().then((user) => {
                    return {
                        status: 200,
                    };
                });
            }
        });
    }catch (err) {
        console.log(err);
        return {
            status: 400,
            body: err,
        };
    }
});