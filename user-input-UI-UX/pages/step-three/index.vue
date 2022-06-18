<template>
    <div class="all-in-ste-three">
        <h3>direct comments on employees</h3>
        <p>The comments are anonymous</p>
        <div class="emp-wrapper">
            <NuxtLink to="/step-four"><button class="custom-btn">skip</button></NuxtLink>
            <div class="employees">
                <div class="single" v-for="employee in employees" :key="employee.Id">
                    <NuxtLink :to=" url + employee._id">
                        <img :src="employee.image">
                        <p>Name: {{ employee.name}}</p>
                        <p>department:{{employee.department}}</p>
                    </NuxtLink>
                </div>
            </div>
            <NuxtLink to="/step-four"><button class="custom-btn">next</button></NuxtLink>
        </div>
        <NuxtPage></NuxtPage>
    </div>
</template>

<script setup>  
    const id = '62ac98e13b8ffe9804c25005';
    const employees = ref([]);
    onMounted(() => {
        //get all employees from the database with fetch
        fetch(`http://localhost:8000/employees/${id}`)
            .then(res => res.json())
            .then(data => {
                employees.value = data;
            })
            .catch(err => {
                console.log(err);
            });
        console.log(employees.value);
    })
    const url = ref('/step-three/');
</script>

<style>

h3,p {
    text-align: center;
    font-family: var(--main-font);
    font-size: .9rem;
}
.emp-wrapper {
    display: grid;
    place-items: center;
}
.employees {
    max-width: 600px;
    font-family: var(--main-font);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
.single a{
   border: 1px solid var(--main-orange); 
   padding: 10px;
   font-size: .8rem;
   margin: 3px;
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   align-items: center;
   text-decoration: none;
   color: #ffffff;
   height: 200px;
   width: 150px;
}
.single img {
    object-fit: cover;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    border: 3px solid hsl(228, 69%, 20%);
}
.single p {
    max-width: 17ch;
    margin: 10px 0;
    font-size: .9rem;
    font-weight: 400;
}
</style>