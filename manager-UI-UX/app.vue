<template>
    <div class="home" >
      <dialog id="modal" @keydown.esc.prevent @keydown.enter = "sign" v-if="modal">
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
          <div class="keep-logs">
            <input type="checkbox" id="keep-logs" v-model="keepLogs">
            <label for="keep-logs">keep me logged in</label>
          </div>
          <p class="signup">sign up for a new account</p>
        </div>
      </dialog>
      <side-bar/>
      <NuxtPage/>
    </div>
</template>



<script setup>
  let userID = ref(null);

  let modal = ref(false);
  onMounted(() => {
    if(localStorage.getItem('userID')){
      userID.value = localStorage.getItem('userID');
    }else if(sessionStorage.getItem('userID')){
      userID.value = sessionStorage.getItem('userID');
    }
    else{
      userID.value = null;
    }
    if (userID.value) {
      modal.value = false;
    }
    else {
      modal.value = true;
    }
  })
  //sign in 
  const email = ref('');
  const password = ref('');
  const keepLogs = ref(false);
  function closeModal() {
    modal.value = false;
  }
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
      if(data == true){
        loginResponse.value = 'invalid password';
      }
      else if(data == false){
        loginResponse.value = 'email not found';
      }
      else{
        loginResponse.value = 'login successful';
        console.log(keepLogs.value);
        if (keepLogs.value == true) {
          localStorage.setItem('userID', data._id);
        }
        else {
          sessionStorage.setItem('userID', data._id);
        }
        closeModal();
      }
  }
  const loginResponse = ref('');
  const focus = () => {
    loginResponse.value = '';
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
  z-index: 100;
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
dialog .login-details{
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

.keep-logs{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
}
.keep-logs input{
  width: 20px !important;
  height: 20px !important;
  border-radius: 50% !important;
  border: 1px solid #ccc !important;
  margin-right: 10px !important;
}
</style>
