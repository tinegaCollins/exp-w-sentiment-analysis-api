<template>

<div class="stepThree">
    <h4>name of employee</h4>
    <img src="../../assets/face-shot.png">
    <div class="stars">
        //stars
    </div>
    <input type="text" placeholder="comments">
    <div class="buttons">
        <button>back</button>
        <button>next</button>
    </div>
</div>
</template>


<script>


export default {
    data(){
        return {
            rou: null
        }
    },
    mounted(){
        console.log(this.$route.params.id)
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
</style>