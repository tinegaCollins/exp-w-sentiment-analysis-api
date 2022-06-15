import { defineStore } from 'pinia'

export const useRangeStore = defineStore('range',{
    state: ()=>({
        rangeNow: 5,
        comments: "fuckkkk"
    }),
    getters: {
        get_range: (state) => state.rangeNow
    },
    actions: {
        changeRange(newRange){
            this.rangeNow = newRange
        }
    }
})