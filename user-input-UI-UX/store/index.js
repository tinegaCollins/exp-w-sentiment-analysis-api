export const state = ()=>({
    rating: 0
})

export const mutations = {
    ADD_RATING(state, rate){
        state.rating = rate;
    }
     
}