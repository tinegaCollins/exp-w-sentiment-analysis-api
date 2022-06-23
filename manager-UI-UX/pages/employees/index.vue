<template>
    <div class="about-employee-wrapper">
        <div class="main-page">
            <div class="header">
                <h3>list of employees</h3>
            </div>
            <div class="list">
                <div class="one-employee" v-for="employee in allEmployees ">
                    <NuxtLink :to="link + employee._id ">
                        <img :src="employee.image">
                        <div class="employee-name">
                            <p>{{ employee.name}}</p>
                            <p><strong>department:</strong>{{ employee.department}}</p>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
            <NuxtLink to='/employees/new' id="add-link">
                <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg>
                new</button>
            </NuxtLink>
    </div>
</template>

<script setup>
const userID = '62b312d38a8577edec62c138';
const allEmployees = ref();
const link = ref('/employees/');
onMounted(()=>{
    fetch(`http://localhost:8000/employees/${userID}`)
    .then(response => response.json())
    //use forEach to get all employees
    .then(data => {
        allEmployees.value = data;
    })
    .catch(err => console.log(err));
})

</script>

<style>
.about-employee-wrapper {
    padding: 20px;
    display: flex;
    flex-direction: row;
}

.list {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}
.list .one-employee {
    border: 1px solid #333;
    border-radius: 10px;
    font-size: .8rem;
}
.list .one-employee a {
    display: flex;
    text-decoration: none;
    color: #ffffff;
    gap: 10px;
    padding: 10px;
}
.list img {
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 50%;
}
#add-link button {
    background: transparent;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 1px solid #ffffff;
    color: #ffffff;
    position: absolute;
    bottom: 5%;
    right: 5%;
}
#add-link button:hover {
    cursor: pointer;
}
#add-link button:hover svg{
    animation: spinner 200ms linear 1;
}
@keyframes spinner {
    0% { transform: rotate(0deg); }
  100% { transform: rotate(180deg); }
}
#add-link svg {
    fill: var(--main-yellow);
}
</style>