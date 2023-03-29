<template>
    <nav class="flex items-center">
        <div class="flex">
            <img src="../../assets/images/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail-removebg-preview.png"
                class="h-14">
            <div class="text-sm self-center ml-2">
                <h1 class="flex items-center">Welcome Back
                    <img src="https://em-content.zobj.net/thumbs/120/apple/325/waving-hand_1f44b.png" alt="wave" class="h-5 ml-2">
                </h1>
                <h2 class="text-xs">{{  name }}, Admin</h2>
            </div>
        </div>
        <div class="ml-auto">
            <Icon icon="ph:bell-simple-duotone" class="text-3xl" />
        </div>
    </nav>
</template>

<script setup>
import { Icon } from '@iconify/vue';

defineProps({
    name: {
        type: String,
        required: true
    }
})
</script>