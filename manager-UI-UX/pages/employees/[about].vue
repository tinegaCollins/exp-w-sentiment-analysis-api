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
                <p>most customers find this employee charming and very beatiful</p>
            </div>
        </div>
    </div>
</template>


<script>

export default {

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
}
.employee-stats .rating-chart {
    height: 300px;
    width: 300px;
}
</style>