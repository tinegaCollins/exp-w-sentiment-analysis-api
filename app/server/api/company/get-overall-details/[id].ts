import company from "~~/server/models/company";
import { Company } from "~~/types/company";
export default eventHandler(async(event) =>  {
    let id = event.context.params.id
    interface message {
        totalReviews: number,
        last6Hours: number,
        satisfied: number,
        unsatisfied: number,
        name: string,
        id: string
    }
    let targetCompany:Company | any = await company.find({
        _id: id
    })
    if(targetCompany.length > 0){
        let messageBody : message = {
            id: targetCompany[0]._id,
            totalReviews: targetCompany[0].totalReviews,
            last6Hours: targetCompany[0].last6HoursReviews,
            satisfied: targetCompany[0].happyClients,
            unsatisfied: targetCompany[0].unSatisfiedClients,
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
