<template>
    <div class="home">
      <dialog id="modal">
        <div class="dialog-logo">
          <img src="./assets/like-thumb-up-svgrepo-com.svg" alt="company logo">
          <h3>thumbs up .</h3>
        </div>
        <div class="login-details">
          <input type="text" placeholder="Email">
          <input type="password" placeholder="Password">
          <button @click="closeModal">login</button>
          <a href="#">forgot your password</a>
        </div>
      </dialog>
      <side-bar/>
      <NuxtPage/>
    </div>
</template>



<script setup>
  const closeModal = () => {
    const modal = document.getElementById('modal');
    modal.close();
    modal.style.display = 'none'; 
  }
  onMounted(() => {
    let modal = document.getElementById('modal');
    modal.showModal();
  })

</script>



<style>
.home {
  height: 100vh;
  display: flex;
  flex-direction: row;
  width: 100vw;
}
dialog{
  width: 400px;
  display: grid;
  place-items: center;
}
dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}
dialog img{
  width: 50px;
  height: 50px;
}
dialog .dialog-logo{
  display: flex;
  flex-direction: column;
  align-items: center;
}
dialog .login-details{
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  margin-top: 50px;
}
dialog .login-details input{
  width: 300px;
  height: 40px;
  border-radius: 80px;
  border: 1px solid #ccc;
  padding: 5px 0 5px 15px;
}
dialog .login-details button{
  width: 300px;
  height: 40px;
  border-radius: 80px;
  border: 1px solid #ccc;
  background: linear-gradient(to right, var(--main-blue), var(--dark-pink));
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
</style>
