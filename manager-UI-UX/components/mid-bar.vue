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
    </div>
</template>



<style>
.mid {
    padding: 10px;
    color: var(--main-color);
}
.top {
    min-width: 700px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 30px;
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

</style>