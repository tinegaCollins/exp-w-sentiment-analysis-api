<template>
    <div class="stepOne">
        <h4>step one</h4>
        <div class="emojis" >
            <p>{{range}}</p>
            <lottie-player v-if="emoji" src="https://assets1.lottiefiles.com/private_files/lf30_t2twv8of.json"  background="transparent"  speed="0.5"  style="width: 50px; height: 50px;"  loop  autoplay></lottie-player>
        </div>
        <p>on a scale of 1-5, how would you say our service was today</p>
        <input type="range" name="range" id="1" min="0" max="5" v-model="range" @mouseleave="handleEmojis">
        <button @click="handleRange" class="custom-btn">next</button>
    </div>
</template>


<script>
import { useRangeStore } from '../stores/main-store.js'
export default {
    setup(){
        useHead({
            script: {
                src:"https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
            }
        })
        const range = ref(0);
        const handleRange = function(){
            const rangeStore = useRangeStore()
            rangeStore.$patch({
                rangeNow: range.value
            })
            const router = useRouter()
            router.push({ path: "/step-two" });
        }
        //handling emojis
        const emoji = ref(false);
        const emojiImg = [
            "https://assets1.lottiefiles.com/private_files/lf30_t2twv8of.json",
            //other emojis
        ]
        const selectedEmoji = ref();
        const handleEmojis = function(){
            selectedEmoji.value = emojiImg[range.value/2 - 1]
            emoji.value = true
        }
        return { range, handleRange, emoji, handleEmojis, selectedEmoji }
    }
}
</script>

<style>
.stepOne{
    text-align: center;
    font-family: var(--main-font);
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    padding: 50px;
    align-items: center;
}
.stepOne input {
    color: var(--main-pink);
    background-color: var(--main-pink);
}
.emojis{
    display: flex;
    flex-direction: row;
    gap: 20px;
}
</style>