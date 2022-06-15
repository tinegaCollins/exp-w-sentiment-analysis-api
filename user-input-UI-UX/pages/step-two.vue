<template>
<div class="stepTwo">
    <h4>add a description of our service </h4>
    <input type="text" placeholder="type your message here" v-model="description">
    <button @click="handleDescription">next</button>
</div>
</template>

<script>
    // import { log } from 'console'; can't believe i just did this lol
    import { useRangeStore } from '../stores/main-store.js'
    export default {
    setup(){
        const description = ref('');
        const handleDescription = function(){
            const rangeStore = useRangeStore()
            rangeStore.$patch({
                descriptionNow: description.value
            })
            const router = useRouter()
            router.push({ path: "/step-three" });
        }
        return { description, handleDescription }
    }
}
</script>

<style>

.stepTwo {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    row-gap: 30px;
}
.stepTwo input {
    height: 100px;
    width: 300px;
    border-radius: 5px;
    background-color: var(--main-yellow);
    border: none;
    outline: none;
    appearance: none;
    border: 1px solid black;
    font-size: 1rem;
    position: relative;
    line-height: 1.5;
}
.stepTwo input::placeholder {
    color: var(--main-blue);
    font-size: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>