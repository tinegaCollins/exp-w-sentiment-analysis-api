<template>
<div class="stepFour">
    <h4>any recomendations for us to make our services/product better</h4>
    <textarea type="text" placeholder="type here" v-model="recommendation"></textarea>
    <button @click.once="sendRecommendation" class="custom-btn">finish</button>
</div>
</template>


<script setup>

    const id = '62ac98e13b8ffe9804c25005';
    const recommendation = ref('');

    async function sendRecommendation(){
        const dataToSend = {
            companyID : id,
            recommendation : recommendation.value
        }
        const response = await fetch('http://localhost:8000/recommendation',{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
        const data = await response.json()
              if (data == true) {
            const router = useRouter()
            router.push('/thanks')
        }
        else {
            console.log('error')
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
.stepFour textarea {
    height: 100px;
    width: 300px;
    border-radius: 5px;
    background-color: var(--main-orange);
    border: none;
    outline: none;
    appearance: none;
}
.stepFour button {
    margin-top: 30px;
}
</style>