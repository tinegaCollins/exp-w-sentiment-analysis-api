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
                        <p><strong>Name:</strong> {{ employee.name}}</p>
                        <p><strong>department: </strong>{{employee.department}}</p>
                    </NuxtLink>
                </div>
            </div>
            <NuxtLink to="/step-four"><button class="custom-btn">next</button></NuxtLink>
        </div>
        <NuxtPage></NuxtPage>
    </div>
</template>

<script>
import { useRangeStore } from '../../stores/main-store.js'
export default {
    setup(){
        const store = useRangeStore()
        const companyid = store.companyID;
        const employees = ref([]);
        onMounted(() => {
            fetch('http://localhost:8000/employees/' + companyid)
            .then(response => response.json())
            .then(data => {
                employees.value = data;
            })
            .catch(error => {
                console.log(error);
            });

        })
        const url = ref('/step-three/');

        return {
            employees,
            url
        }
    }
}
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
   padding: 5px;
   font-size: .8rem;
   margin: 3px;
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   align-items: center;
   text-decoration: none;
   color: #ffffff;
}
.single img {
    height: auto;
    width: 70px;
}
.single p {
    max-width: 17ch;
    margin: 10px 0;
}
</style>