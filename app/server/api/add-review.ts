import review from '../models/review'

export default defineEventHandler(async (event) => {
    const { overallRating, overallExperience, easeOfUse, problems, suggestions, likelyToRecommend, companyId } = await readBody(event)
    try {
        const newReview = new review({
            overallRating,
            overallExperience,
            easeOfUse,
            problems,
            suggestions,
            likelyToRecommend,
            companyId,
        })
        const savedReview = await newReview.save()
        
        return {
            status: 200,
            body: savedReview._id,
        }
    } catch (err) {
        console.log(err)
        return {
            status: 400,
            body: err,
        }
    }
})
