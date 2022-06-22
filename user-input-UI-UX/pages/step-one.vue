<template>
    <div class="stepOne">
        <h4>step one</h4>
        <div class="emojis" >
            <p>{{range}}</p>
        </div>
        <p>on a scale of 1-5, how would you say our service was today</p>
        <input type="range" name="range" id="1" min="0" max="5" v-model="range">
        <button @click="handleRange" class="custom-btn">next</button>
    </div>
</template>


<script setup>

const id = '62b1e8d5b3b9f806d6a76189'
const range = ref(0)

async function handleRange() {
    const datatosend = {
        companyID : id,
        rate: range.value * 2
    }
    const response = await fetch('http://localhost:8000/rating', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datatosend)
    })
    const data = await response.json()
    if (data == true) {
        const router = useRouter()
        router.push('/step-two')
    }
    else {
        console.log('error')
    }
}
</script>

<style>
.stepOne{
    text-align: center;
    font-family: var(--main-font);
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    padding: 50px;
    align-items: center;
}
.stepOne input {
    color: var(--main-pink);
    background-color: var(--main-pink);
}
.emojis{
    display: flex;
    flex-direction: row;
    gap: 20px;
}
</style>