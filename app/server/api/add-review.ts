import review from '../models/review'
import company from '../models/company'
import axios from 'axios'
let score = {
    overall: 0,
    suggestions: 0,
}
interface sentiment {
    pos: number
    neg: number
    mid: number
}
async function getSentiment(text: string, type: string) {
    const encodedParams = new URLSearchParams()
    encodedParams.append('text', text)

    const options = {
        method: 'POST',
        url: 'https://text-sentiment.p.rapidapi.com/analyze',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '45795778b2mshc65c825db6a5520p1897c5jsn18929dd5769c',
            'X-RapidAPI-Host': 'text-sentiment.p.rapidapi.com',
        },
        data: encodedParams,
    }

    await axios
        .request(options)
        .then(function (response) {
            let value: sentiment = response.data
            if (type === 'overall') {
                if (value.pos > value.neg) {
                    score.overall = 1
                } else if (value.pos < value.neg) {
                    score.overall = -1
                } else {
                    score.overall = 0
                }
            } else {
                if (value.pos > value.neg) {
                    score.suggestions = 1
                } else if (value.pos < value.neg) {
                    score.suggestions = -1
                } else {
                    score.suggestions = 0
                }
            }
        })
        .catch(function (error) {
            console.error(error)
        })
}
export default defineEventHandler(async (event) => {
    const { overallRating, overallExperience, easeOfUse, problems, suggestions, likelyToRecommend, companyId } = await readBody(event)
    try {
        await getSentiment(overallExperience, 'overall')
        await getSentiment(suggestions, 'suggestions')
        const newReview = new review({
            overallRating,
            overallExperience,
            easeOfUse,
            problems,
            suggestions,
            likelyToRecommend,
            companyId,
            overallExperienceSentiment: score.overall,
            seggestionsSentiment: score.suggestions,
        })
        const savedReview = await newReview.save()
        const companyToUpdate: any = await company.findById(companyId)
        companyToUpdate.totalReviews = companyToUpdate.totalReviews + 1
        if (overallRating > 3) {
            companyToUpdate.happyClients = companyToUpdate.happyClients + 1
        } else if (overallRating < 3) {
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

    // try {
    //     const newReview = new review({
    //         overallRating,
    //         overallExperience,
    //         easeOfUse,
    //         problems,
    //         suggestions,
    //         likelyToRecommend,
    //         companyId,
    //     })
    //     const savedReview = await newReview.save()
    //     const companyToUpdate: any = await company.findById(companyId)
    //     companyToUpdate.totalReviews = companyToUpdate.totalReviews + 1
    //     if (overallRating > 3) {
    //         companyToUpdate.happyClients = companyToUpdate.happyClients + 1
    //     } else if (overallRating < 3) {
    //         companyToUpdate.unSatisfiedClients = companyToUpdate.unSatisfiedClients + 1
    //     }
    //     await companyToUpdate.save()

    //     return {
    //         status: 200,
    //         body: savedReview._id,
    //     }
    // } catch (err) {
    //     console.log(err)
    //     return {
    //         status: 400,
    //         body: err,
    //     }
    // }
})
