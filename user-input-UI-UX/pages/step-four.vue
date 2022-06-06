<template>
<div class="stepFour">
    <h4>any recomendations for us to make our services/product better</h4>
    <input type="text" placeholder="type here" v-model="recomendations">
    <NuxtLink to="/thanks"><button>finish</button></NuxtLink>
</div>
</template>


<script>


export default {
    data(){
        return {
            recomendations: ''
        }
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