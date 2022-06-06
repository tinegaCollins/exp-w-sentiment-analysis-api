<template>
    <div class="wrapper">
        <p class="first">Help us improve your Expirience</p>
        <img src="../assets/undraw_reviews_lp8w.svg">
        <button @click.once="next">Start</button>
        <p class="last">The comments are anonymous and the account details are encryted</p>
    </div>
</template>

<script>


export default {
    methods: {
        next(){
            this.$router.push("step-one")
        }
    }
}

</script>

<style>
.wrapper {
    font-family: var(--main-font);
    margin: 20px 0;
    display: grid;
    place-items: center;
    row-gap: 50px;
    max-width: 100vw;
}
.wrapper img {
    height: 200px;
    width: auto;
}
.wrapper .first{
    font-size: 1rem;
}
.wrapper .last {
    font-size: .8rem;
    text-align: center;
}

</style>
