<template>
  <div class="wrapper">
    <SideBar></SideBar>
    <MidBar/>
  </div>
</template>

<script>

import './assets/main.css'


</script>

<style>


body {
  background-color: var(--bg-color);
  min-height: 90vh;
  color: var(--main-color);
  font-family: var(--main-font);
}
.wrapper {
  padding: 25px 40px;
  height: 100vh;
  display: flex;
  flex-direction: row;
}
</style>
