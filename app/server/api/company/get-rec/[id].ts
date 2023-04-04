import company from '~~/server/models/company'
import { Company } from '~~/types/company'
import review from '~~/server/models/review'

export default eventHandler(async (event) => {
    let id = event.context.params.id
    let reviews: any

    // get all reviews for the company
    let totalReviews = await review.find({
        companyId: id,
    })

    let LikelyToRecommend = await review.find({
        companyId: id,
        likelyToRecommend: {
            //greater than or equal to 3
            $gte: 3,
        }
    })
    let percentage = (LikelyToRecommend.length / totalReviews.length) * 100
    return {
        statusCode: 200,
        body: {
            percentage: percentage
        }
    }
    
})
