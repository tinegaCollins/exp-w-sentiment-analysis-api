import review from '../models/review'
import company from '../models/company'

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
        // Update total reviews for the company
        const companyToUpdate: any = await company.findById(companyId)
        companyToUpdate.totalReviews = companyToUpdate.totalReviews + 1
        if(overallRating > 3){
            companyToUpdate.happyClients = companyToUpdate.happyClients + 1
        }else if (overallRating < 3){
            companyToUpdate.unSatisfiedClients = companyToUpdate.unSatisfiedClients + 1
        }
        await companyToUpdate.save()
        
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
