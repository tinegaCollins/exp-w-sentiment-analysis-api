<template>
  <div class="wrapper">
    <SideBar/>
  </div>
</template>

<script>

import './assets/main.css'
import SideBar from './components/side-bar.vue';

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
}
</style>
