export const state = () => ({
    range : 0,
    description: '',
    recomendation: ''
})

export const mutations = {
    ADD_RANGE(state,num){
       state.range =  num
    },
    ADD_DESCRIPTION(state,des){
        state.description = des
    },
    ADD_RECOMENDATION(state,rec){
        state.recomendation = rec
    }
}

export const getters = {
    GET_RANGE(state){ return state.range}
}