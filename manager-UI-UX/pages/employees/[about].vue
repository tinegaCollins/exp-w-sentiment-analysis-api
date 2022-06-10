<template>
    <div class="single-employee-wrapper">
        <div class="about-single-employee">
            <img src="../../assets/face-shot.png" alt="employee image">
            <div class="inline-tex">
                <h1>Jessica huang</h1>
                <p>department of entertainment and enjoyment</p>
            </div>
        </div>
        <div class="employee-stats">
            <div class="rating-chart background-blur">
            </div>
            <div class="attributes">
                 <div class="stars">
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                </div>
                <p>most customers find this employee charming and very beatiful</p>
            </div>
           
        </div>
    </div>
</template>


<script>

export default {
    mounted(){
        console.log("mounted")
        let rating = 2.5;
        let stars = [...document.querySelectorAll(".star")];

        if (rating % 1 != 0){
            for (let i = 0; i < rating - 0.5; i++) {
                stars[i].classList.add('stars-earned')
            }
            stars[rating - 0.5].classList.add('half-star')
        }
        else{
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add('stars-earned')
            }
        }
 
    }
}
</script>

<style>

.single-employee-wrapper {
    padding: 30px;
}
.about-single-employee {
    display: flex;
    justify-content: flex-start;
    column-gap: 30px;
}
.employee-stats {
    display: flex;
    margin-top: 30px;
    gap: 20px;
    font-size: .8rem;
}
.employee-stats .rating-chart {
    height: 300px;
    width: 300px;
}
/* stars */
.stars {
    display: flex;
    flex-direction: row;
    column-gap: 5px;
}
.star{
    height: 25px;
    width: 25px;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}
.stars-earned {
    background-color: var(--main-yellow);
}
.half-star {
    background-color: var(--main-yellow);
    clip-path: polygon(50% 0%, 50% 22%, 49% 31%, 50% 43%, 50% 55%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}
</style>