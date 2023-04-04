<template>
    <div class="w-[20ch] mt-5">
        <p class="text-bold text-xl">{{ data }}% are likely to recommend your product/service to their friends.</p>
    </div>
</template>

<script setup lang="ts">
let router = useRoute();
let data = ref()
let getData = async () => {
    let response = await $fetch(
      `/api/company/get-rec/${router.params.id}`
    );
    data.value = response.body.percentage
    // round to 2 decimal places
    data.value = Math.round(data.value * 100) / 100
  }
  getData()
</script>