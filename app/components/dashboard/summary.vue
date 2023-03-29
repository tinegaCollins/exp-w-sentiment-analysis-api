<template>
    <div class="grid grid-cols-5 gap-10 w-full border-t border-b border-black/30 mt-8 py-3">
        <div class="bg-[#F19F1D] flex gap-5 justify-center items-center py-4 px-4 rounded-md shadow-lg">
            <Icon icon="grommet-icons:overview" class="text-5xl text-white ml-auto" />
            <div class="ml-auto">
                <h1 class="text-center text-5xl text-white">{{ totalReviews }}</h1>
                <p class="text-white text-center text-sm">All reviews</p>
            </div>
        </div>
        <div class="bg-[#3498DB] flex gap-5 justify-center items-center py-4 px-4 rounded-md shadow-lg">
            <Icon icon="mdi:clock-minus-outline" class="text-5xl text-white ml-auto" />
            <div class="ml-auto">
                <h1 class="text-center text-5xl text-white">{{ last6Hours }}</h1>
                <p class="text-white text-center text-sm">last 8 hours</p>
            </div>
        </div>
        <div class="bg-[#1ABC9C] flex gap-5 justify-center items-center py-4 px-4 rounded-md shadow-lg">
            <Icon icon="et:happy" class="text-5xl text-white ml-auto" />
            <div class="ml-auto">
                <h1 class="text-center text-5xl text-white">{{ satisfied }}</h1>
                <p class="text-white text-center text-sm">Happy Clients</p>
            </div>
        </div>
        <div class="bg-[#E74C3C] flex gap-5 justify-center items-center py-4 px-4 rounded-md shadow-lg">
            <Icon icon="teenyicons:mood-sad-outline" class="text-5xl text-white ml-auto" />
            <div class="ml-auto">
                <h1 class="text-center text-5xl text-white">{{ unsatisfied }}</h1>
                <p class="text-white text-center text-sm">Unsatisfied Clients</p>
            </div>
        </div>
        <div class="bg-[#72019C] flex gap-5 justify-center items-center py-4 px-4 rounded-md shadow-lg">
            <Icon icon="ph:smiley-meh-duotone" class="text-5xl text-white ml-auto" />
            <div class="ml-auto">
                <h1 class="text-center text-5xl text-white">{{ neutral }}</h1>
                <p class="text-white text-center text-sm">Neutral clients</p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
defineProps({
    last6Hours: {
        required: true
    },
    totalReviews: {
        required: true
    },
    satisfied: {
        required: true
    },
    unsatisfied: {
        required: true
    },
    neutral: {
        required: true
    }
})
</script>