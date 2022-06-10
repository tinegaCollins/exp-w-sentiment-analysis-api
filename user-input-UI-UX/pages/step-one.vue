<template>
    <div class="stepOne">
        <h4>step one</h4>
        <p>on a scale of 1-10, how would you say our service was today</p>
        <p>{{range}}</p>
        <input type="range" name="range" id="1" min="0" max="10" v-model="range">
        <NuxtLink to="/step-two"><button @click="handleRange">next</button></NuxtLink>
    </div>
</template>


<script>
export default {
    setup(){
        const range = ref();
        const handleRange = ()=>{
            console.log("router")
        }

        return { range , handleRange}
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
</style>