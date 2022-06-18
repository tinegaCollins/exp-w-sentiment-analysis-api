<template>
<div class="stepTwo">
    <h4>add a description of our service </h4>
    <textarea placeholder="type your message here" v-model="review" rows="5" cols="60"></textarea>
    <button @click="handleReview" class="custom-btn">next</button>
</div>
</template>

<script setup>
    const review = ref('');
    const id = '62ac98e13b8ffe9804c25005'
    async function handleReview() {
        const datatosend = {
            companyID : id,
            review: review.value
        }
        const response = await fetch('http://localhost:8000/review', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datatosend)
        })
        const data = await response.json()
        if (data == true) {
            const router = useRouter()
            router.push('/step-three')
        }
        else {
            console.log('error')
        }
    }
</script>

<style>

.stepTwo {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    row-gap: 30px;
}
.stepTwo textarea {
    height: 150px;
    width: 300px;
    border-radius: 5px;
    background-color: var(--main-blue);
    border: none;
    outline: none;
    appearance: none;
    border: 1px solid black;
    font-size: 1rem;
    position: relative;
    line-height: 1.5;
    color: var(--main-color);
}
.stepTwo textarea::placeholder {
    color: var(--main-blue);
    font-size: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>