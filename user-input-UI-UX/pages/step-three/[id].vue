<template>
<div class="stepThree">
    <h4>{{ employeeDetails.name }}</h4>
    <img  :src="employeeDetails.image" v-if="image">
    <div class="range">
        <p>{{ rating}}</p>
        <input type="range" name="range" v-model="rating" min="0" max="10">
    </div>
    <textarea placeholder="comments" v-model="empComments" @focusin="focus" @focusout="focus"></textarea>
    <div class="buttons">
        <NuxtLink to="/step-three"><button class="custom-btn">back</button></NuxtLink>
        <button @click.once="handleEmployee" class="custom-btn">next</button>
    </div>
</div>
</template>


<script setup>
     useHead({
        link: {
            rel: "icon",
            href: "../../assets/like-thumb-up-svgrepo-com.svg"
        }
    })
    const rating = ref(0);
    const empComments = ref('');
    const router = useRoute()
    const employeeId = router.params.id;
    const employeeDetails = ref({});
    onMounted(() => {
        fetch('http://localhost:8000/employee/' + employeeId)
        .then(response => response.json())
        .then(data => {
            employeeDetails.value = data;
        })
        .catch(error => {
            console.log(error);
        });
    })

    async function handleEmployee(){
        const dataToSend = {
            rating: rating.value,
            review: empComments.value
        };
        const response = await fetch(`http://localhost:8000/employee/${employeeId}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        });
        const data = await response.json()
         if (data == true) {
            const router = useRouter()
            router.push('/step-four')
        }
        else {
            console.log('error')
        }
    }

    const image = ref(true);
    const focus = function(){
        image.value = !image.value
    }

</script>


<style>

.stepThree {
    display: grid;
    place-items: center;
    font-family: var(--main-font);
    row-gap: 15px;
}
.stepThree img{
    height: 200px;
    width: 200px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #ccc;
}
.stepThree textarea {
    height: 100px;
    width: 300px;
    border: none;
    background-color: #f2f2f2;
    border-radius: 5px;
    padding: 10px;
}
.stepThree .buttons {
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.stars {
    display: flex;
    flex-direction: row;
    column-gap: 5px;
}
.star{
    background-color: var(--main-yellow);
    height: 25px;
    width: 25px;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}
.stars-earned {
    background-color: var(--main-yellow);
}
.half-star {
    background-color: var(--main-yellow);
    clip-path: polygon(50% 0%, 50% 22%, 49% 31%, 50% 43%, 50% 55%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}
</style>