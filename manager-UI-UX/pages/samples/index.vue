<template>
    <div class="samples-wrapper">
        <div class="today background-blur">
            <h4>today</h4>
        </div>
        <div class="other">
            <div class="a-week-ago blur-background">

            </div>
            <div class="last-month blur-background">
            
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
.samples-wrapper {
    padding: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.samples-wrapper .today{
    height: 45%;
    width: 100%;
}
.samples-wrapper .other{
    display: flex;
    justify-content: space-around;
    height: 50%;
}
.samples-wrapper .other > div {
    height: 100%;
    width: 46%;
}
</style>