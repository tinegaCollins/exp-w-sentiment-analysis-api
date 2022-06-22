<template>
<div class="stepTwo">
    <h4>add a description of our service </h4>
    <textarea placeholder="type your message here" v-model="review" rows="5" cols="60"></textarea>
    <button @click="handleReview" class="custom-btn">next</button>
</div>
</template>

<script setup>
    const review = ref('');
    const id = '62b1e8d5b3b9f806d6a76189';
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
    border-radius: 9px;
    background-color: #f2f2f2;
    border: none;
    outline: none;
    appearance: none;
    border: 1px solid black;
    font-size: 1rem;
    position: relative;
    line-height: 1.5;
    color: var(--main-color);
    color: #333;
    padding: 10px;
}
</style>