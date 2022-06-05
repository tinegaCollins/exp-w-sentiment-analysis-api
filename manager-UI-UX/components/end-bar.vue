<template>
<div class="end">
    <div class="date">
        <input type="date" name="" id="">
    </div>
    <div class="notes">
        <div class="one background-blur">
        </div>
        <div class="two background-blur">

        </div>
        <div class="three background-blur">

        </div>
    </div>
</div>
</template>


<style>

.end {
    padding: 30px;
    width: 350px;
}
.notes {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
}
.notes > div {
    width: 100%;
    height: 60px;
    border-radius: 10px;
}
</style>