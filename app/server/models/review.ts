import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
    overallRating: {
        type: Number,
        required: true,
    },
    overallExperience: {
        type: String,
        required: false,
    },
    overallExperienceSentiment: {
        type: Number,
        required: false,
    },
    easeOfUse: {
        type: Number,
        required: true,
    },
    problems: {
        type: String,
        required: false,
    },
    suggestions: {
        type: String,
        required: false,
    },
    seggestionsSentiment: {
        type: Number,
        required: false,
    },
    likelyToRecommend: {
        type: Number,
        required: true,
    },
    companyId: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
})

export default mongoose.model('Review', reviewSchema)
