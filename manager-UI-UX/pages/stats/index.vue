<template>
<div>
    stistics
    <button @click="handleClick">click</button>
    <p ref="paragraph">the company name {{companyName}} and number of emloyess is {{employees}}</p>
    <p>my name is {{name}} i know {{skill}} and i am {{age}}</p>
    <button @click="changeSkill">change skill</button>
    <button @click="age++">add 1 to age</button>
    <input type="text" name="" id="" v-model="skill">
    <p> the student name is {{student.name}} and is {{student.age}}</p>
    <button @click="updateStudent">change student</button>
    <h2>reactive</h2>
    <p>{{studentTwo.name}} and {{studentTwo.age}}</p>
    <button @click="updateStudenttwo">update student 2</button>
</div>
</template>


<script>
    export default {
        setup(){
            const companyName = ref("fresh pickens");
            const employees = ref(150);
            const paragraph = ref('hello')
            const handleClick = ()=>{
                // console.log(paragraph.value);
                // paragraph.value.classList.add('text');
                companyName.value = "globe farmer";
                employees.value = 350;
            }
            //ref for reactivity

            const name = ref('tinega');
            const age = ref(22);
            const skill = ref("javascript");

            const changeSkill = ()=>{
                name.value = "janet";
                age.value = 21;
                skill.value = "running"
            }
            //reactive for reactivity

            const student = ref({ name: 'carol', age: 23})
            const studentTwo = reactive({name: 'collins', age: 22})
            const updateStudent = ()=>{
                student.value.age = 38;
            }
            const updateStudenttwo = ()=>{
                studentTwo.age = 38;
            }

            return {companyName, employees, handleClick, 
            paragraph,name,age,skill, changeSkill,
            student, updateStudent ,studentTwo,updateStudenttwo}
        }
    }
</script>