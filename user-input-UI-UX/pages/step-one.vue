<template>
    <div class="stepOne">
        <h4>step one</h4>
        <p>on a range of 1-10, how would you say our service was today</p>
        <input type="range" name="range" id="1" v-model="range">
        <button @click="handleRange">next</button>
    </div>
</template>


<script>

export default {
    data(){
        return {
            range: null,
        }
    },
    methods: {
        handleRange(){
           if(this.range === null){
               console.log('enter a range')
           } 
           else {
               const promise = new Promise
               //send range to server
               .then(()=>{
                   if(res.message === 'sent'){
                       this.$router.go('/step-three')
                   }
                   else{
                       //messages to display if error occurs
                   }
               })
               .catch((err)=>{
                   //display error
               })
           }
        }
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

</style>