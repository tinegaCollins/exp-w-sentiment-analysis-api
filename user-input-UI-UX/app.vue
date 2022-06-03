<template>
    <navBar/>
    <div class="steps" v-if="display.one">
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
        <div class="four"></div>
    </div>
    <NuxtPage></NuxtPage>
    <footBar/>
</template>


<script>


import './assets/main.css'
 export default {
     data(){
         return {
             tracker: null,
             display: {
                 one : false,
                 two: false,
                 three: false,
                 four: false
             }
         }
     },
    mounted(){
        let path = this.$route.fullPath
        console.log(path)
    }
 }

</script>

<style>
.steps{
    display: flex;
    justify-content: center;
    column-gap: 40px;
}
.steps > div {
    height: 20px;
    width: 20px;
    background-color: aquamarine;
    border-radius: 50%;
}
</style>