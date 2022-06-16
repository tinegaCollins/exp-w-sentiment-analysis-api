<template>
<div class="stepThree">
    <h4>name of employee</h4>
    <img src="../../assets/face-shot.png">
    <input type="range" name="range" id="" v-model="rating" min="0" max="10">
    <p>{{ rating}}</p>
    <textarea placeholder="comments" v-model="empComments"></textarea>
    <div class="buttons">
        <NuxtLink to="/step-three"><button class="custom-btn">back</button></NuxtLink>
        <button @click.once="handleEmployee" class="custom-btn">next</button>
    </div>
</div>
</template>


<script>
import { useRangeStore } from '../../stores/main-store.js'
export default {
    setup(){
         useHead({
            link: {
                rel: "icon",
                href: "../../assets/like-thumb-up-svgrepo-com.svg"
            }
        })
        const rating = ref(0);
        const empComments = ref('');
        const router = useRoute();
        const employeeId = router.params.id;
        console.log(employeeId);
        const employeeDetails = ref({});
        onMounted(() => {
            fetch('http://localhost:8000/employees/' + employeeId)
            .then(response => response.json())
            .then(data => {
                employeeDetails.value = data;
            })
            .catch(error => {
                console.log(error);
            });
        })
        const store = useRangeStore()
        const handleEmployee = function(){
            store.$patch((state)=>{
                state.employeeData.push({
                    employeeID: employeeId.value,
                    rating: rating.value,
                    description: empComments.value
                })
            })
            const router = useRouter()
            router.push({ path: "/step-four" });
        }

        return { rating, empComments, handleEmployee , employeeDetails}
    }
}

</script>


<style>

.stepThree {
    display: grid;
    place-items: center;
    font-family: var(--main-font);
    row-gap: 20px;
}
.stepThree img{
    height: 200px;
    width: auto;
}
.stepThree textarea {
    height: 50px;
    width: 200px;
    border: none;
    background-color: #f2f2f2;
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