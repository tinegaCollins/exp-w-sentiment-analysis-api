<template>
    <div class="stepOne">
        <h4>step one</h4>
        <p>on a range of 1-10, how would you say our service was today</p>
        <p>{{ranger}}</p>
        <input type="range" name="range" id="1" min="0" max="10" v-model="ranger">
        <button @click="handleRange">next</button>
    </div>
</template>


<script>

// import { mapMutations } from 'vuex'
export default {
    data(){
        return {
            ranger: null,
        }
    },
    methods: {
        handleRange(){
            this.$store.commit('ADD_RANGE', this.ranger)
        }
    },
    mounted(){
        console.log("mounted")
        console.log(this.$store.state.range)
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
    padding: 50px
}
.stepOne input {
    color: var(--main-pink);
    background-color: var(--main-pink);
}
</style>