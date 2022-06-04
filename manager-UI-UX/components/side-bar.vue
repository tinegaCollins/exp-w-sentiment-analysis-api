<template>
    <div class="sideBar background-blur">
        <div class="logo">
            <img src="../assets/like-thumb-up-svgrepo-com.svg">
            <p>thumbs up <strong>.</strong></p>
        </div>
    </div>
</template>


<style>

.sideBar {
    width: 250px;
    height: 100%;
    position: relative;
    border-radius: 10px;
    padding: 20px;
}
.logo {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    font-size: .8rem;
}
.logo strong{
    color: var(--main-orange);
    font-size: 20px;
}
.logo img {
    height: 30px;
    width: auto;
}
</style>