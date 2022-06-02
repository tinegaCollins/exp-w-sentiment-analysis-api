<template>

    <navBar />
    <div class="wrapper">
        <p class="first">Help us improve your Expirience</p>
        <img src="../../assets/undraw_reviews_lp8w.svg">
        <button @click.once="next">Start</button>
        <p class="last">The comments are anonymous and the account details are encryted</p>
    </div>
    <FootBar />


</template>

<script>

import '../../assets/main.css'

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
    row-gap: 30px;
}
.wrapper img {
    height: 200px;
    width: auto;
}
.wrapper .first{
    font-size: 1.3em;
}
.wrapper button {
 padding: 0.8em 1.7em;
 background-color: transparent;
 border-radius: .3em;
 position: relative;
 overflow: hidden;
 cursor: pointer;
 transition: .5s;
 font-weight: 400;
 font-size: 17px;
 border: 1px solid;
 font-family: inherit;
 text-transform: uppercase;
 color: var(--main-blue);
 z-index: 1;
}
.wrapper button::before, .wrapper button::after {
 content: '';
 display: block;
 width: 50px;
 height: 50px;
 transform: translate(-50%, -50%);
 position: absolute;
 border-radius: 50%;
 z-index: -1;
 background-color: var(--main-blue);
 transition:  all 1s ease;
}

.wrapper button::before {
 top: -1em;
 left: -1em;
}

.wrapper button::after {
 left: calc(100% + 1em);
 top: calc(100% + 1em);
}

.wrapper button:hover::before, .wrapper button:hover::after {
 height: 410px;
 width: 410px;
}

.wrapper button:hover {
 color: rgb(10, 25, 30);
}

.wrapper button:active {
 filter: brightness(.8);
}
</style>
