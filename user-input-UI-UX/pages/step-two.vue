<template>
<div class="stepTwo">
    <h4>add a description of our service </h4>
    <input type="text" placeholder="type your message here">
    <NuxtLink to="/step-three"><button>next</button></NuxtLink>
</div>
</template>


<style>

.stepTwo {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    row-gap: 30px;
}
.stepTwo input {
    height: 50px;
    width: 300px;
    border-radius: 10px;
    background-color: var(--main-yellow);
    border: none;
    outline: none;
    appearance: none;
    border: 1px solid black;
    font-size: 1rem;
}
</style>