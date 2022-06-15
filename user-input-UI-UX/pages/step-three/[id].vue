<template>

<div class="stepThree">
    <h4>name of employee</h4>
    <img src="../../assets/face-shot.png">
    <input type="range" name="range" id="" v-model="rating" min="0" max="10">
    <p>{{ rating}}</p>
    <input type="text" placeholder="comments" v-model="empComments">
    <div class="buttons">
        <NuxtLink to="/step-three"><button>back</button></NuxtLink>
        <button @click.once="handleEmployee">next</button>
    </div>
</div>
</template>


<script>
import { useRangeStore } from '../../stores/main-store.js'
export default {
    setup(){
        const rating = ref(0);
        const empComments = ref('');
        const employeeId = ref(0); //change on fetch

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

        return { rating, empComments, handleEmployee }
    }
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
    width: auto;
}
.stepThree input {
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