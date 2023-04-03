import company from '~~/server/models/company'
import { Company } from '~~/types/company'
import review from '~~/server/models/review'

export default eventHandler(async (event) => {
    let id = event.context.params.id
    // all reviews of a company
    let reviews = await review.find({
        companyId: id,
    })
    let positiveReviews = reviews.filter((review) => {
        //@ts-ignore
        return review.overallExperienceSentiment > 0
    })
    let negativeReviews = reviews.filter((review) => {
        //@ts-ignore
        return review.overallExperienceSentiment < 0
    })
    let neutralReviews = reviews.filter((review) => {
        return review.overallExperienceSentiment == 0
    })
    let numbers =[ positiveReviews.length, negativeReviews.length, neutralReviews.length]

    return {
        statusCode: 200,
        body: {
            message: "Success",
            data: {
                numbers
            }
        }
    }
})
