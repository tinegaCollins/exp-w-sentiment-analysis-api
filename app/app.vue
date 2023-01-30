<template>
    <div class="min-h-screen flex items-center flex-col py-32" v-if="activeTab == 0">
        <img src="https://static.thenounproject.com/png/1547454-200.png" class="h-12 w-auto" />
        <h1 class="text-xl mb-8">Feedback Forte</h1>
        <p>The best way to predict the future of a product is to shape it.</p>
        <button class="button mt-10" @click="nextTab">START</button>
    </div>
    <div v-else-if="activeTab == 1" class="h-screen">
        <h1>Step 1</h1>
    </div>
</template>

<script setup>
let activeTab = ref(0);
const nextTab = () => {
    activeTab.value = activeTab.value + 1;
};
</script>
<style>
body {
    line-height: 1.5;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0%;
    margin: 0%;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    @apply bg-[#f0f0f0];
}
.button {
 --green: #1BFD9C;
 font-size: 15px;
 padding: 0.7em 2.7em;
 letter-spacing: 0.06em;
 position: relative;
 font-family: inherit;
 border-radius: 0.6em;
 overflow: hidden;
 transition: all 0.3s;
 line-height: 1.4em;
 border: 2px solid var(--green);
 background: linear-gradient(to right, rgba(27, 253, 156, 0.1) 1%, transparent 40%,transparent 60% , rgba(27, 253, 156, 0.1) 100%);
 color: black;
 box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.4), 0 0 9px 3px rgba(27, 253, 156, 0.1);
}

.button:hover {
 box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.6), 0 0 9px 3px rgba(27, 253, 156, 0.2);
}

.button:before {
 content: "";
 position: absolute;
 left: -4em;
 width: 4em;
 height: 100%;
 top: 0;
 transition: transform .4s ease-in-out;
 background: linear-gradient(to right, transparent 1%, rgba(27, 253, 156, 0.1) 40%,rgba(27, 253, 156, 0.1) 60% , transparent 100%);
}

.button:hover:before {
 transform: translateX(15em);
}
</style>
