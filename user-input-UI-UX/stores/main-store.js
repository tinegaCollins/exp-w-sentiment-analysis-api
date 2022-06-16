import { defineStore } from 'pinia'

export const useRangeStore = defineStore('range',{
    state: ()=>({
        rangeNow: 5,
        descriptionNow: '',
        recomendationsNow: '',
        employeeData: [],
        companyID: '123'
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