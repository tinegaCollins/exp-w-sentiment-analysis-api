<template>
    <div class="wrapper">
        <p class="first">Help us improve your Expirience</p>
        <img src="../assets/undraw_reviews_lp8w.svg">
        <nuxt-link to="/step-one"><button class="custom-btn">Start</button></nuxt-link>
        <p class="last">The comments are anonymous and the account details are encryted</p>
    </div>
</template>

<script>


export default {
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
    font-size: .7rem;
    text-align: center;
    height: max-content;
}
.wrapper button {
    padding: 15px 50px !important;
    border-radius: 30px !important;
    font-size: 1.1rem !important;
}
.wrapper button:hover {
    cursor: pointer;
    background-color: var(--main-yellow);
}   
    
</style>
