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
            </div>
            <div class="yesterday ">
                <div class="up background-blur">

                </div>
                <div class="down background-blur">

                </div>
            </div>
            <div class="live-today background-blur">

            </div>
            <div class="samples background-blur">
                
            </div>
        </main>
    </div>
</template>



<style>
.mid {
    padding: 10px;
    color: var(--main-color);
}
.top {
    min-width: 650px;
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
    height:55%;
    width: 100%;
    border-radius: 10px;
}
main .yesterday .down {
    height: 40%;
    width: 100%;
    border-radius: 10px
}
main .live-today {
    height: 250px;
    width: 40%;
    border-radius: 10px;
}
main .samples {
    height: 250px;
    width: 50%;
    border-radius: 10px;
}
</style>