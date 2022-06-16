<template>
  <div class="all">
    <navBar/>
    <NuxtPage></NuxtPage>
    <footBar/>
  </div>
</template>


<script>



import './assets/main.css'

</script>

<style>
.all {
    min-height: 100vh;
}
.custom-btn{
    padding: 10px 20px !important;
    border: none;
    border: 1px solid black;
    border-radius: 20px;
    width: max-content;
    align-self: center;
    background-color: var(--main-blue);
    transition: background-color 300ms ease;
}
.custom-btn:hover {
    cursor: pointer;
    background-color: var(--main-yellow);
}
</style>