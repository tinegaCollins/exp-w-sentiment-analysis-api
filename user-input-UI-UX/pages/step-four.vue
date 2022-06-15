<template>
<div class="stepFour">
    <h4>any recomendations for us to make our services/product better</h4>
    <input type="text" placeholder="type here" v-model="recomendations">
    <button @click.once="handleRecomendations">finish</button>
</div>
</template>


<script>

import { useRangeStore } from '../stores/main-store.js'

export default {
    setup(){
        const userId = ref(0);// changed on fetch
        const companyId = ref(0);// changed on fetch
        const recomendations = ref('');
        const handleRecomendations = async function(){
            const rangeStore = useRangeStore()
            rangeStore.$patch({
                recomendationsNow: recomendations.value
            })

            const dataToBeSent = {
                userID: userId.value,
                companyID: companyId.value,
                rating: rangeStore.rangeNow,
                generalDescrition: rangeStore.descriptionNow,
                recomendation: rangeStore.recomendationsNow,
                employeeData: rangeStore.empData
            }

            //api call to send data to server
            const response = await fetch('http://localhost:8000/user-data/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToBeSent)
            })
            const data = await response.json()
            if(data == true){
                const router = useRouter()
                router.push({ path: "/thanks" });
            }
            else{
                console.log('data not sent')
            }
        }
        return { recomendations, handleRecomendations }
    }
}
</script>
<style>
.stepFour {
    font-family: var(--main-font);
    display: grid;
    place-items: center;
    row-gap: 15px;
    text-align: center;
    padding: 20px;
    font-size: .8rem;
}
.stepFour input {
    height: 50px;
    width: 300px;
    border-radius: 10px;
    background-color: var(--main-orange);
    border: none;
    outline: none;
    appearance: none;
}
.stepFour button {
    margin-top: 30px;
}
</style>