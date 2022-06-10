<template>

<div class="stepThree">
    <h4>name of employee</h4>
    <img src="../../assets/face-shot.png">
    <div class="stars">
        <div ref="star" class="star"></div>
        <div ref="star" class="star"></div>
        <div ref="star" class="star"></div>
        <div ref="star" class="star"></div>
        <div ref="star" class="star"></div>
    </div>
    <input type="text" placeholder="comments">
    <div class="buttons">
        <button>back</button>
        <NuxtLink to="/step-four"><button>next</button></NuxtLink>
    </div>
</div>
</template>


<script>

export default {
    setup(){
        // let stars = [...document.querySelectorAll(".star")]
        const star = ref(null);
        return { star }
    },
    mounted(){
        console.log(star.value)
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