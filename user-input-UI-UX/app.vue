<template>
  <div class="all">
    <navBar/>
    <div class="steps" v-if="display.one">
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
        <div class="four"></div>
    </div>
    <NuxtPage></NuxtPage>
    <footBar/>
  </div>
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
     }
 }

</script>

<style>
.all {
    display: grid;
    place-items: center;
    max-height: 100vh;
}
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
button {
    padding: 10px 20px !important;
    border: none;
    border: 1px solid black;
    border-radius: 20px;
    width: max-content;
    align-self: center;
    background-color: var(--main-blue);
    transition: background-color 300ms ease;
}
button:hover {
    cursor: pointer;
    background-color: var(--main-yellow);
}
</style>