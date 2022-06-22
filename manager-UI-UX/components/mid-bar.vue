<template>
    <div class="mid">
        <div class="top">
            <div class="search background-blur">
                <label for="search"><img src="../assets/search-svgrepo-com.svg"></label>
                <input type="text" placeholder="tap to search">
            </div>
            <div class="bell background-blur">
                <img src="../assets/bell-svgrepo-com.svg">
            </div>
        </div>
        <main>
            <div class="preview background-blur">
                <div class="chart">
                    <h3>{{ displayData.lastMonth }}</h3>
                </div>
            </div>
            <div class="yesterday ">
                <div class="up background-blur">

                </div>
                <div class="down background-blur">
                    <img class="blur-background" src="../assets/increase-svgrepo-com.svg" >
                    <div class="info">
                        <p>30 day </p>
                        <p>customer satisfactory rate</p>
                    </div>
                    <p>{{ displayData.satisfactoryRatings}}%</p>
                </div>
            </div>
            <div class="live-today background-blur">
                <h4>sample comments today</h4>
                <div class="sample-examples" v-for="sample in reviews" :key="sample">
                    <p>{{ sample.review }}</p>
                </div>
            </div>
            <div class="top-employees background-blur">
                <h5>top employees</h5>
                <div class="blur-background" v-for="employee in topEmployees">
                    <img :src="employee.image" >
                    <div class="details">
                        <h4>{{ employee.name }}</h4>
                        <p>{{ employee.department }}</p>
                    </div>
                    <p>{{ employee.averageRating}}0%</p>
                </div>
            </div>
        </main>
    </div>
</template>


<script setup>

const userID = '62b312d38a8577edec62c138';
const displayData = ref({});
const reviews = ref();
const topEmployees = ref([]);
onMounted(()=>{
    fetch(`http://localhost:8000/getRandomReviews/${userID}`)
    .then(response => response.json())
    .then(data => {
        reviews.value = data;
    })
    .catch(err => console.log(err));

    //get other data
    fetch(`http://localhost:8000/company/${userID}`)
    .then(response => response.json())
    .then(data => {
        displayData.value = data;
    })
    .then(()=>{
        let topEmployeesIds = displayData.value.topThreeEmployees;
        for(let i = 0; i < topEmployeesIds.length; i++){
            fetch(`http://localhost:8000/employee/${topEmployeesIds[i]}`)
            .then(response => response.json())
            .then(data => {
                topEmployees.value.push(data);
            })
            .catch(err => console.log(err));
        }
    })
    .then(()=>{
        console.log(topEmployees.value);
    })
    .catch(err => console.log(err));
})
</script>
<style>
.mid {
    padding: 20px 0;
    color: var(--main-color);
    height: 100%;
    display: grid;
    column-gap: 50px;
}
.top {
    min-width: 650px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 30px;
    height: 40px;
}
.search {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    border-radius: 10px;
    column-gap: 20px;
    padding: 0 15px;
}
.search input {
    background: transparent;
    border: none;
    outline: none;
    appearance: none;
    color: var(--main-color);
}
.search img , .bell img {
    height: 20px;
}

.bell{
    padding: 10px 13px;
    border-radius: 10px;
}
.bell:hover {
    cursor: pointer;
}
main {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 15px 0;
    justify-content: center;
    gap: 20px;
}
main .preview {
    height: 250px;
    width: 40%;
    border-radius: 10px;
}
main .yesterday {
    height: 250px;
    width: 50%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}
main .yesterday .up {
    height:75%;
    width: 100%;
    border-radius: 10px;
}
main .yesterday .down {
    height: 25%;
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
}
main .yesterday .down .info {
    font-size: .7rem;
    margin: 0 auto 0 10px;
    padding: 10px 0;
    position: relative;
    top: 10px;
}
main .yesterday .down .info p:nth-child(2) {
    position: relative;
    bottom: 10px;
    color: var(--main-orange);
}
main .yesterday .down img {
    padding: 5px;
    height: 40px;
    border-radius: 10px;
}
main .yesterday .down > p {
    color: var(--main-yellow);
    font-size: .8rem;
}
main .live-today {
    height: 250px;
    width: 40%;
    border-radius: 10px;
    font-size: .8rem;
    padding: 20px;
}
main .live-today .sample-examples {
    padding: .1em 10px !important;
    border-radius: 10px;
    font-size: .75rem;
}
main .top-employees {
    height: 250px;
    width: 50%;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
main .top-employees > div {
    display: flex;
    font-size: .8rem;
    border-radius: 10px;
    height: 50px;
    align-items: center;
    padding: 0 10px;
    transition: background 100ms ease-in;
}
main .top-employees > div:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.001);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
}
main .top-employees > div .details {
    font-size: .5rem;
    height: min-content;
    margin-left: 10px;
    position: relative;
    top: 5px;
}
main .top-employees > div .details p{
    position: relative;
    bottom: 7px;
}
main .top-employees > div .details p:nth-child(2){
    color: var(--main-orange);
}
main .top-employees > div > p {
    margin: 0 0 0 auto;
    color: var(--main-yellow);
}
main .top-employees img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--bg-color);
}
</style>