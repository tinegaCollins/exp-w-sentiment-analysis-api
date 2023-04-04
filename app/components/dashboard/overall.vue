<template>
    <div class="px-2">
        <h2 class="text-semibold text-black">What people say about your product</h2>
        <div >
            <Sample v-for="review in reviews" :review="review.overallExperience" :date="review.createdAt" :sign="review.sign" />
        </div>
    </div>
</template>

<script setup lang="ts">


let reviews = ref<any>();

let router = useRoute();

let getReviews = async () => {
    let response = await $fetch(`/api/company/get-overall/${router.params.id}`);
    reviews.value = response.body.reviews as any;
    console.log(reviews.value);
};
getReviews();
</script>