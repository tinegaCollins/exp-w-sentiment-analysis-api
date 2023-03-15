import company from "~~/server/models/company";
import { Company } from "~~/types/company";
export default eventHandler(async(event) =>  {
    let id = event.context.params.id
    interface message {
        total: number,
        last6Hours: number,
        happy: number,
        sad: number,
        name: string,
    }
    let targetCompany:Company | any = await company.find({
        _id: id
    })
    if(targetCompany.length > 0){
        let messageBody : message = {
            total: targetCompany[0].totalReviews,
            last6Hours: targetCompany[0].last6HoursReviews,
            happy: targetCompany[0].happyClients,
            sad: targetCompany[0].unSatisfiedClients,
            name: targetCompany[0].name,
        }
        console.log(messageBody)
        return{
            status: 200,
            body : messageBody
        }
    }else {
        return {
            status: 400,
            message: "not found"
        }
    }
})
