<template>
    <div class="home" >
      <dialog id="modal" @keydown.esc.prevent @keydown.enter = "sign">
        <div class="dialog-logo">
          <img src="./assets/like-thumb-up-svgrepo-com.svg" alt="company logo">
          <h3>thumbs up .</h3>
        </div>
        <div class="login-details">
          <p>{{ loginResponse }}</p>
          <input type="text" placeholder="Email" v-model="email" @focus="focus">
          <input type="password" placeholder="Password" v-model="password" @focus="focus">
          <button @click="sign">login</button>
          <a href="#">forgot your password</a>
          <p class="signup" @click="signUp">sign up for a new account</p>
        </div>
      </dialog>
      <dialog id="modal2" @keydown.esc.prevent>
        <div class="dialog-logo">
          <img src="./assets/like-thumb-up-svgrepo-com.svg" alt="company logo">
          <h3>thumbs up .</h3>
        </div>
        <div class="signup-details">
          <p>{{ signupResponse }}</p>
          <input type="text" placeholder="Email" v-model="email" @focus="focus">
          <input type="password" placeholder="Password" v-model="password" @focus="focus">
          <input type="password" placeholder="Confirm Password" v-model="confirmPassword" @focus="focus">
          <button @click="signUp">sign up</button>
          <p class="signin">already have an account?</p>
        </div>
      </dialog>
      <side-bar/>
      <NuxtPage/>
    </div>
</template>



<script setup>
  const userID = '';
  const closeModal = () => {
    const modal = document.getElementById('modal');
    modal.close();
    modal.style.display = 'none'; 
  }
  onMounted(() => {
    let modal = document.getElementById('modal');
    modal.showModal();
  })
  //sign in 
  const email = ref('');
  const password = ref('');

  const sign = async () => {
    const dataToSend = {
      email: email.value,
      password: password.value
    };

    const response = await fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    });
    const data = await response.json();
    console.log(data);
      if(data == true){
        loginResponse.value = 'invalid password';
      }
      else if(data == false){
        loginResponse.value = 'email not found';
      }
      else{
        userID = data._id;
        loginResponse.value = 'login successful';
        closeModal();
      }
  }
  const loginResponse = ref('');
  const focus = () => {
    loginResponse.value = '';
  }
  //sign up
  const signUp = () => {
    const modal = document.getElementById('modal');
    modal.animate([
      { transform: 'translateX(0)', opacity: 1 },
      { transform: 'translateX(-200%)', opacity: .2 }
    ], {
      duration: 200,
      fill: 'forwards'
    });
    setTimeout(() => {
      closeModal();
    }, 300);
    const modal2 = document.getElementById('modal2');
    modal2.style.display = 'block';
    modal2.showModal();
    modal2.animate([
      { transform: 'translateX(200%)', opacity: .2 },
      { transform: 'translateX(0)', opacity: 1 }
    ], {
      duration: 200,
      fill: 'forwards'
    });
  }
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
  background-color: rgba(0, 0, 0, 0.7);
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
dialog .login-details, .signup-details{
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  margin-top: 30px;
}
dialog .login-details input, .signup-details input{
  width: 300px;
  height: 40px;
  border-radius: 80px;
  border: 1px solid #ccc;
  padding: 5px 0 5px 15px;
}
dialog .login-details button, .signup-details button{
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
dialog .login-details a {
  text-decoration: none;
  color: #333;
  font-size: .8rem;
}
dialog .login-details p{
  font-size: .8rem;
  height: min-content;
}
dialog .login-details p:nth-child(1){
  color: var(--main-yellow);
  font-size: 1rem;
}
dialog .login-details .signup{
  margin-top: 20px;
  padding: 10px;
  border-radius: 30px;
}
dialog .login-details .signup:hover{
  border: 1px solid #ccc;
  cursor: pointer;
}
#modal2{
  display: none;
}
</style>
