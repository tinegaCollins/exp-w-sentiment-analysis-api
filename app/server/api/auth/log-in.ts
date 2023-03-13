import company from "~~/server/models/company";
import { Company } from "../../../types/company";

export default defineEventHandler(async (event) => {
    const { email, password } = await readBody<Company>(event);
    let user:any = await company.findOne({ email });
    if(user){
        if(user.password === password){
            return {
                status: 200,
                body: user._id,
            };
        }else{
            return {
                status: 401,
                body: "Incorrect password",
            };
        }
    }else{
        return {
            status: 400,
            body: "User not found",
        };
    }
});