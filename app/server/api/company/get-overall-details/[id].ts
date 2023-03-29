import company from '~~/server/models/company'
import { Company } from '~~/types/company'
import review from '~~/server/models/review'

export default eventHandler(async (event) => {
    let id = event.context.params.id
    interface message {
        totalReviews: number
        last6Hours: number
        satisfied: number
        unsatisfied: number
        name: string
        id: string
        neutral: number
    }
    let targetCompany: Company | any = await company.find({
        _id: id,
    })
    let totalReviews = await review.find({
        companyId: id,
    })
    let last6HoursReviews = await review.find({
        companyId: id,
        createdAt: {
            $gte: new Date(Date.now() - 8 * 60 * 60 * 1000),
        },
    })
    let happy = await review.find({
        companyId: id,
        overallRating: {
            $gte: 4,
        },
        createdAt: {
            $gte: new Date(Date.now() - 8 * 60 * 60 * 1000),
        },
    })
    let unhappy = await review.find({
        companyId: id,
        overallRating: {
            $lte: 2,
        },
        createdAt: {
            $gte: new Date(Date.now() - 8 * 60 * 60 * 1000),
        },
    })
    let neutral = await review.find({
        companyId: id,
        overallRating: {
            $eq: 3
        },
        createdAt: {
            $gte: new Date(Date.now() - 8 * 60 * 60 * 1000),
        },
    })
    if (targetCompany.length > 0) {
        let messageBody: message = {
            id: targetCompany[0]._id,
            totalReviews: totalReviews.length,
            last6Hours: last6HoursReviews.length,
            satisfied: happy.length,
            unsatisfied: unhappy.length,
            neutral: neutral.length,
            name: targetCompany[0].name,
        }
        return {
            status: 200,
            body: messageBody,
        }
    } else {
        return {
            status: 400,
            message: 'not found',
        }
    }
})
