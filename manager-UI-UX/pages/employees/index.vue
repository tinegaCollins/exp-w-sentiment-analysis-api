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
</style>