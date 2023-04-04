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

    let veryEasy = await review.find({
        companyId: id,
        easeOfUse: {
            $eq: 5,
        }
    })
    let easy = await review.find({
        companyId: id,
        easeOfUse: {
            $eq: 4,
        }
    })
    let neutral = await review.find({
        companyId: id,
        easeOfUse: {
            $eq: 3,
        }
    })
    let difficult = await review.find({
        companyId: id,
        easeOfUse: {
            $eq: 2,
        }
    })
    let veryDifficult = await review.find({
        companyId: id,
        easeOfUse: {
            $eq: 1,
        }
    })
    return {
        statusCode: 200,
        body: {
            ease: [veryEasy.length,easy.length, neutral.length, difficult.length, veryDifficult.length]
        }
    }
})
