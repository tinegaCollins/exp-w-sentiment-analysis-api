<template>
    <div>
        <div class="flex items-center">
            <h1 class="text-xl font-bold">Question 5</h1>
            <p class="border border-black rounded-full grid place-items-center h-6 ml-auto w-6">?</p>
        </div>
        <h1 class="mt-3">Suggest any improvements we can make to our product/service.</h1>
        <div>
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                message</label>
            <textarea id="message" rows="4" v-model="t"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your thoughts here..."></textarea>
        </div>
        <div class="flex gap-2 mt-4 w-full justify-center">
            <button class="bg-[#1da6f5] py-2 px-4 w-24 rounded-lg text-white mt-4" @click="previous">Previous</button>
            <button class="bg-[#1da6f5] py-2 px-4 w-24 rounded-lg text-white mt-4" @click="next">Next</button>
        </div>
    </div>
</template>


<script setup lang="ts">
import { useReviewStore } from '~~/stores/review';
let review = useReviewStore();
let emit = defineEmits(["next", "previous"]);
let t = ref("");
const next = () => {
    review.setSuggestions(t.value);
    emit("next");
}
const previous = () => {
    emit("previous");
}
</script>