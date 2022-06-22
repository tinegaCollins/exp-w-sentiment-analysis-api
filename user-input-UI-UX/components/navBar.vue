<template>

<nav>
    <div class="nav-contents">
      <img src="../assets/like-thumb-up-svgrepo-com.svg" alt="logo">
      <h3>Thumbs up <strong>.</strong></h3>
    </div>
    <div class="progress-bar">
      <div class="step-one"></div>
      <div class="step-two"></div>
      <div class="step-three "></div>
      <div class="step-four"></div>
      <div class="step-five"></div>
    </div>
</nav>

</template>


<script>
export default {
  data() {
    return {
      show: true,
      path: '',
    };
  },
  watch: {
    $route(to, from) {
      this.path = to.path;
      console.log(this.path);
      switch (this.path) {
        case '/':
          this.show = true;
          break;
        case '/step-one':
          this.getColourBox(1);
          break;
        case '/step-two':
          this.getColourBox(2);
          break;
        case '/step-three':
          this.getColourBox(3);
          break;
        case '/step-four':
          this.getColourBox(4);
          break;
        case '/step-five':
          tthis.getColourBox(5);
          break;
        default:
          this.show = false;
          break;
      }
    }
  },
  methods: {
    getColourBox(loops){
      let boxes = [...document.querySelectorAll('.step-one, .step-two, .step-three, .step-four, .step-five')];
      for (let i = 0; i < loops; i++) {
        boxes[i].classList.add('active');
      }
    }
  }
};




</script>

<style>

.nav-contents {
  display: flex;
  height: 10vh;
  font-family: var(--main-font);
  width: 60%;
  margin-top: 20px;
  align-self: flex-start;
  margin-left: 5%;
}
.nav-contents h3{
  font-size: .9rem;
  margin-left: 20px;
  color: var(--main-pink);
}
.nav-contents h3 strong {
  color: var(--main-orange);
  font-size: 1.5rem;
}
.nav-contents img {
  height: 60%;
}
.progress-bar {
  display: flex;
  width: 100vw;
  justify-content: center;
  column-gap: 10px;
}
.progress-bar div {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid wheat;
}
.step-four, .step-five {
  background: transparent !important;
}
.active {
  background: var(--main-pink);
}
</style>