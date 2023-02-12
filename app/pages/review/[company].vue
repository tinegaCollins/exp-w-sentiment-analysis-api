<template>
    <div class="flex items-center justify-center flex-col">
        <img src="/logo-flat.png" class="h-20 mt-2">
        <div class="px-4 mt-4 w-full lg:px-24">
            <ReviewQuestion1 @next="next" v-if="questions == 1" />
            <ReviewQuestion2 @next="next" @previous="previous" v-if="questions == 2" />
            <ReviewQuestion3 @next="next" @previous="previous" v-if="questions == 3" />
            <ReviewQuestion4 @next="next" @previous="previous" v-if="questions == 4" />
            <ReviewQuestion5 @next="next" @previous="previous" v-if="questions == 5" />
            <ReviewQuestion6 @previous="previous" v-if="questions == 6" @next="next" />
            <ReviewFinal v-if="questions == 7" />
        </div>

    </div>
</template>

<script setup lang="ts">
let questions = ref<number>(1);
let next = () => {
    questions.value++;
}
let previous = () => {
    questions.value--;
}

</script>