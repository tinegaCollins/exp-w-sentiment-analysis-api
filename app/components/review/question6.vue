<template>
    <div>
        <div class="flex items-center">
            <h1 class="text-xl font-bold">Question 6</h1>
            <p class="border border-black rounded-full grid place-items-center h-6 ml-auto w-6">?</p>
        </div>
        <h1 class="mt-3">
            How likely are you to recommend this product/service to a friend or colleague?
        </h1>
        <div class="mt-6">
            <div class="text-3xl flex justify-around mt-4">
                <p class="p-2 rounded-lg" @click="rating(1)" :class="rate == 1 ? 'bg-green-100' : 'bg-[#FFF2C9]'">😣</p>
                <p class="bg-[#FFF2C9] p-2 rounded-lg" @click="rating(2)"
                    :class="rate == 2 ? 'bg-green-100' : 'bg-[#FFF2C9]'">☹️</p>
                <p class="bg-[#FFF2C9] p-2 rounded-lg" @click="rating(3)"
                    :class="rate == 3 ? 'bg-green-100' : 'bg-[#FFF2C9]'">😐</p>
                <p class="bg-[#FFF2C9] p-2 rounded-lg" @click="rating(4)"
                    :class="rate == 4 ? 'bg-green-100' : 'bg-[#FFF2C9]'">😊</p>
                <p class="bg-[#FFF2C9] p-2 rounded-lg" @click="rating(5)"
                    :class="rate == 5 ? 'bg-green-100' : 'bg-[#FFF2C9]'">😄</p>
            </div>
            <div class="flex justify-between mt-4 text-sm text-gray-500">
                <p>Not likely</p>
                <p>Very Likely</p>
            </div>
        </div>
        <div class="flex gap-2 mt-4 w-full justify-center">
            <button class="bg-[#1da6f5] py-2 px-4 w-24 rounded-lg text-white mt-4" @click="previous">Previous</button>
            <button class="bg-[#1da6f5] py-2 px-4 w-24 rounded-lg text-white mt-4" @click="finish">finish</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useReviewStore } from '~~/stores/review';
let review = useReviewStore();

let emit = defineEmits(["next", "previous"]);
let rate = ref<number>(0);
let rating = (rating: number) => {
    rate.value = rating;
    review.setLikelyToRecommend(rating);
    console.log(review.likelyToRecommend);
}
// get route params
const { params } = useRoute();
async function finish() {
    await review.submitReview(params.company).then(() => {
        emit("next");
    });
}
const previous = () => {
    emit("previous");
}
</script>