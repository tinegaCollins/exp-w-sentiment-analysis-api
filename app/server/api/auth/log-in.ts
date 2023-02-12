import company from "~~/server/models/company";
import { Company } from "../../../types/company";

export default defineEventHandler(async (event) => {
    const { email, password } = await readBody<Company>(event);
    console.log(email, password)
    let user:any = company.findOne({ email: email }, (err:any, docs:any) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(docs)
            if(docs.password === password) {
                return {
                    status: 200,
                    body: JSON.stringify(docs._id),
                }
            }
            else {
                return {
                    status: 201,
                    body: JSON.stringify({ message: 'Not authenticated' }),
                }
            }

        }
    });
});