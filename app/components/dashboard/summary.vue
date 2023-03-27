<template>
    <div class="grid grid-cols-4 gap-10 w-full border-t border-b border-black/30 mt-8 py-3">
        <div class="bg-[#F19F1D] flex gap-5 justify-center items-center py-7 px-4 rounded-md shadow-lg">
            <Icon icon="grommet-icons:overview" class="text-7xl text-white ml-auto" />
            <div class="ml-auto">
                <h1 class="text-center text-5xl text-white">{{ totalReviews }}</h1>
                <p class="text-white text-center text-sm">All reviews</p>
            </div>
        </div>
        <div class="bg-[#3498DB] flex gap-5 justify-center items-center py-7 px-4 rounded-md shadow-lg">
            <Icon icon="mdi:clock-minus-outline" class="text-7xl text-white ml-auto" />
            <div class="ml-auto">
                <h1 class="text-center text-5xl text-white">{{ last6Hours }}</h1>
                <p class="text-white text-center text-sm">last 6 hours</p>
            </div>
        </div>
        <div class="bg-[#1ABC9C] flex gap-5 justify-center items-center py-7 px-4 rounded-md shadow-lg">
            <Icon icon="et:happy" class="text-7xl text-white ml-auto" />
            <div class="ml-auto">
                <h1 class="text-center text-5xl text-white">{{ satisfied }}</h1>
                <p class="text-white text-center text-sm">Happy Clients</p>
            </div>
        </div>
        <div class="bg-[#E74C3C] flex gap-5 justify-center items-center py-7 px-4 rounded-md shadow-lg">
            <Icon icon="teenyicons:mood-sad-outline" class="text-7xl text-white ml-auto" />
            <div class="ml-auto">
                <h1 class="text-center text-5xl text-white">{{ unsatisfied }}</h1>
                <p class="text-white text-center text-sm">Unsatisfied Clients</p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
defineProps({
    last6Hours: {
        type: Number,
        required: true
    },
    totalReviews: {
        type: Number,
        required: true
    },
    satisfied: {
        type: Number,
        required: true
    },
    unsatisfied: {
        type: Number,
        required: true
    },
    neutral: {
        type: Number,
        required: true
    }
})
</script>