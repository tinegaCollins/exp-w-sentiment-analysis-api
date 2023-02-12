<template>
    <div class="w-full">
        <div class="flex items-center">
            <h1 class="text-xl font-bold">Question 1</h1>
            <p class="border border-black rounded-full grid place-items-center h-6 ml-auto w-6">?</p>
        </div>
        <div class="mt-6">
            <p class="text-">How would you rate this product/service?</p>
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
                <p>Very bad</p>
                <p>Very Good</p>
            </div>
        </div>
        <div class="flex gap-2 mt-4 w-full justify-center">
            <button class="bg-[#1da6f5] py-2 px-4 w-24 rounded-lg text-white mt-4" @click="next">Next</button>
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
    review.setOverallRating(rate.value);
}
const next = () => {
    if (rate.value == 0) {
        useToast('Please select a rating', 'error')
        return;
    }
    else {
        emit("next");
    }
}

</script>