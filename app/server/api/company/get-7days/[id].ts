import company from '~~/server/models/company'
import { Company } from '~~/types/company'
import review from '~~/server/models/review'

export default eventHandler(async (event) => {
    let id = event.context.params.id
    let reviews: any;
    let targetCompany: Company | any = await company.find({
        _id: id,
    })
    let totalReviews = await review.find({
        companyId: id,
    })
    if(targetCompany.length < 1){
        return {
            statusCode: 404,
            body: {
                message: "Company not found"
            }
        }
    }
    let last7Days = new Date()
    last7Days.setDate(last7Days.getDate() - 2)
    let last7DaysReviews = await review.find({
        companyId: id,
        createdAt: {
            $gte: last7Days
        }
    })
    return {
        statusCode: 200,
        body: {
            message: "Success",
            data: {
                company: targetCompany,
                reviews: last7DaysReviews,
                totalReviews: totalReviews.length
            }
        }
    }
})
