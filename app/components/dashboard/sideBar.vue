<script setup lang="ts">
import { Icon } from "@iconify/vue";
let router = useRoute();
console.log(router.params.id);
let link = `http://localhost:3000/review/${router.params.id}`;
//fuction to copy link to clipboard
function copyLink() {
    navigator.clipboard.writeText(link).then(
        //@ts-ignore
        useToast('link copied to clipboard', 'success')
    );
}
</script>
<template>
    <div class="bg max-w-[250px] h-full rounded-r-3 flex flex-col items-center pt-7 overflow-hidden">
        <img src="/logo-flat.png" alt="Logo" class="h-14" />
        <div class="w-full flex flex-col mt-10 px-4 gap-3">
            <NuxtLink :to="`/dashboard-${$route.params.id}`" class="bg-[#f5f5f5] flex items-center pl-15 gap-3 h-12 rounded-lg active:bg-red-500">
                <Icon icon="material-symbols:overview-key-outline" class="" />
                <span class="text-sm">Overview</span>
            </NuxtLink>
        </div>
        <div class="mt-auto mb-5 px-4">
            <div class="bg-white/25 text-gray-600 text-sm text-center px-4 rounded-xl py-4">
                <p>Having any problems with managing your dashboard?</p>
                <p>Try to contact <br /> Customer support</p>
                <button class="bg-[#1da6f5] py-2 px-4 w-full rounded-lg text-white mt-4">Contact Us</button>
            </div>
        </div>
        <div class="w-full px-4">
            <div class="bg-white/25 py-2 w-full mb-2 flex relative px-2 rounded-lg">
                <p class="text-xs whitespace-nowrap relative w-[25ch] overflow-x-hidden top-[2px]">{{ link }}</p>
                <Icon icon="material-symbols:content-copy-outline-rounded" class="text-lg ml-auto hover:cursor-pointer" @click="copyLink"/>
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