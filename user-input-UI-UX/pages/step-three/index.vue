<template>


<h3>direct comments on employees</h3>
<p>The comments are anonymous</p>
<div class="emp-wrapper">
    <NuxtLink to="/step-four"><button>skip</button></NuxtLink>
    <div class="employees">
        <div class="single">
            <NuxtLink to="/step-three/id45">
            <img src="../../assets/face-shot.png">
            <p><strong>Name:</strong> Grace msalame</p>
            <p><strong>department: </strong>soaps and detergents</p>
            </NuxtLink>
        </div>
        <div class="single">
            <NuxtLink to="/step-three/id45">
            <img src="../../assets/face-shot.png">
            <p><strong>Name:</strong> Grace msalame</p>
            <p><strong>department: </strong>soaps and detergents</p>
            </NuxtLink>
        </div>
        <div class="single">
            <NuxtLink to="/step-three/id45">
            <img src="../../assets/face-shot.png">
            <p><strong>Name:</strong> Grace msalame</p>
            <p><strong>department: </strong>soaps and detergents</p>
            </NuxtLink>
        </div>
        <div class="single">
            <NuxtLink to="/step-three/id45">
            <img src="../../assets/face-shot.png">
            <p><strong>Name:</strong> Grace msalame</p>
            <p><strong>department: </strong>soaps and detergents</p>
            </NuxtLink>

        </div>
        <div class="single">
            <NuxtLink to="/step-three/id45">
            <img src="../../assets/face-shot.png">
            <p><strong>Name:</strong> Grace msalame</p>
            <p><strong>department: </strong>soaps and detergents</p>
            </NuxtLink>

        </div>
        <div class="single">
            <NuxtLink to="/step-three/id45">
            <img src="../../assets/face-shot.png">
            <p><strong>Name:</strong> Grace msalame</p>
            <p><strong>department: </strong>soaps and detergents</p>
            </NuxtLink>
        </div>
    </div>
    <NuxtLink to="/step-four"><button>next</button></NuxtLink>
</div>
<NuxtPage></NuxtPage>

</template>


<style>

h3,p {
    text-align: center;
    font-family: var(--main-font);
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