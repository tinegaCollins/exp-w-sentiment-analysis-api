<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>
<template>
    <div class="bg max-w-[250px] h-full rounded-2xl flex flex-col items-center pt-7">
        <img src="/logo-flat.png" alt="Logo" class="h-14" />
        <div class="w-full flex flex-col mt-10 px-2 gap-3">
            <NuxtLink to="/" class="bg-[#f5f5f5] flex items-center justify-center gap-3 h-12 rounded-lg">
                <Icon icon="material-symbols:overview-key-outline" />
                <span class="text-sm">Overview</span>
            </NuxtLink>
            <NuxtLink to="/" class="flex items-center justify-between px-20 h-12 rounded-lg">
                <Icon icon="bx:stats" />
                <span class="text-sm">Stats</span>
            </NuxtLink>
            <NuxtLink to="/" class="flex items-center justify-between px-20 h-12 rounded-lg">
                <Icon icon="bi:people" />
                <span class="text-sm">Employees</span>
            </NuxtLink>
        </div>
        <div class="mt-auto mb-5 px-3">
            <div class="bg-white/25 text-gray-600 text-sm text-center px-4 rounded-xl py-4">
                <p>Having any problems with managing your dashboard?</p>
                <p>Try to contact <br /> Customer support</p>
                <button class="bg-[#1da6f5] py-2 px-4 w-full rounded-lg text-white mt-4">Contact Us</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg {
    background-color: #8BC6EC;
    background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
}
</style>