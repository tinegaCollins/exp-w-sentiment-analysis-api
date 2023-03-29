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
    reviews = totalReviews.map((review) => {
        return {
            suggestion: review.suggestions,
            createdAt: review.createdAt
        }
    })
    // get the last 3 in the array
    reviews = reviews.slice(-3)
    return {
        statusCode: 200,
        body: {
            reviews: reviews
        }
    }
})
