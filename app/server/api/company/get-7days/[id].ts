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
    // get today reviews
    let today = new Date()
    let todayReviews = await review.find({
        companyId: id,
        createdAt: {
            $gte: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
            $lt: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)
        }
    })
    //get yesterday reviews
    let yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)
    let yesterdayReviews = await review.find({
        companyId: id,
        createdAt: {
            $gte: new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate()),
            $lt: new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate() + 1)
        }
    })
    //get 2 days ago reviews
    let twoDaysAgo = new Date(today)
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2)
    let twoDaysAgoReviews = await review.find({
        companyId: id,
        createdAt: {
            $gte: new Date(twoDaysAgo.getFullYear(), twoDaysAgo.getMonth(), twoDaysAgo.getDate()),
            $lt: new Date(twoDaysAgo.getFullYear(), twoDaysAgo.getMonth(), twoDaysAgo.getDate() + 1)
        }
    })
    //get 3 days ago reviews
    let threeDaysAgo = new Date(today)
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3)
    let threeDaysAgoReviews = await review.find({
        companyId: id,
        createdAt: {
            $gte: new Date(threeDaysAgo.getFullYear(), threeDaysAgo.getMonth(), threeDaysAgo.getDate()),
            $lt: new Date(threeDaysAgo.getFullYear(), threeDaysAgo.getMonth(), threeDaysAgo.getDate() + 1)
        }
    })
    //get 4 days ago reviews
    let fourDaysAgo = new Date(today)
    fourDaysAgo.setDate(fourDaysAgo.getDate() - 4)
    let fourDaysAgoReviews = await review.find({
        companyId: id,
        createdAt: {
            $gte: new Date(fourDaysAgo.getFullYear(), fourDaysAgo.getMonth(), fourDaysAgo.getDate()),
            $lt: new Date(fourDaysAgo.getFullYear(), fourDaysAgo.getMonth(), fourDaysAgo.getDate() + 1)
        }
    })
    //get 5 days ago reviews
    let fiveDaysAgo = new Date(today)
    fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5)
    let fiveDaysAgoReviews = await review.find({
        companyId: id,
        createdAt: {
            $gte: new Date(fiveDaysAgo.getFullYear(), fiveDaysAgo.getMonth(), fiveDaysAgo.getDate()),
            $lt: new Date(fiveDaysAgo.getFullYear(), fiveDaysAgo.getMonth(), fiveDaysAgo.getDate() + 1)
        }
    })
    //get 6 days ago reviews
    let sixDaysAgo = new Date(today)
    sixDaysAgo.setDate(sixDaysAgo.getDate() - 6)
    let sixDaysAgoReviews = await review.find({
        companyId: id,
        createdAt: {
            $gte: new Date(sixDaysAgo.getFullYear(), sixDaysAgo.getMonth(), sixDaysAgo.getDate()),
            $lt: new Date(sixDaysAgo.getFullYear(), sixDaysAgo.getMonth(), sixDaysAgo.getDate() + 1)
        }
    })
    //get 7 days ago reviews
    let sevenDaysAgo = new Date(today)
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
    let sevenDaysAgoReviews = await review.find({
        companyId: id,
        createdAt: {
            $gte: new Date(sevenDaysAgo.getFullYear(), sevenDaysAgo.getMonth(), sevenDaysAgo.getDate()),
            $lt: new Date(sevenDaysAgo.getFullYear(), sevenDaysAgo.getMonth(), sevenDaysAgo.getDate() + 1)
        }
    })


    return {
        statusCode: 200,
        body: {
            message: "Success",
            data: {
                total: [sixDaysAgoReviews.length, fiveDaysAgoReviews.length, fourDaysAgoReviews.length, threeDaysAgoReviews.length, twoDaysAgoReviews.length, yesterdayReviews.length, todayReviews.length],
                totalReviews: totalReviews.length
            }
        }
    }
})
