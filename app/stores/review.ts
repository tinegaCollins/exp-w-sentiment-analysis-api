import { defineStore } from 'pinia'

export const useReviewStore = defineStore({
    id: 'review',
    state: () => ({
        overallRating: 0,
        overallExperience: '',
        easeOfUse: 0,
        problems: '',
        suggestions: '',
        likelyToRecommend: 0,
    }),
    getters: {
        all: (state) => state,
    },
    actions: {
        setOverallRating(rating: number) {
            this.overallRating = rating
        },
        setOverallExperience(experience: string) {
            this.overallExperience = experience
        },
        setEaseOfUse(rating: number) {
            this.easeOfUse = rating
        },
        setProblems(problems: string) {
            this.problems = problems
        },
        setSuggestions(suggestions: string) {
            this.suggestions = suggestions
        },
        setLikelyToRecommend(rating: number) {
            this.likelyToRecommend = rating
        },
        async submitReview(companyId: string | string[]) {
            await $fetch('/api/add-review', {
                method: 'POST',
                body: JSON.stringify({
                    overallRating: this.overallRating,
                    overallExperience: this.overallExperience,
                    easeOfUse: this.easeOfUse,
                    problems: this.problems,
                    suggestions: this.suggestions,
                    likelyToRecommend: this.likelyToRecommend,
                    companyId,
                }),
            }).then((res:any) => {
                if (res.status === 200) {
                    useToast('review submitted successfully', 'success')
                } else {
                    useToast('an error occurred while submitting your review', 'error')
                }
            })
        },
    },
})
