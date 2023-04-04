<template>
    <div class="px-2">
        <h2 class="text-semibold text-black">Some problems they encountered</h2>
        <div >
            <Sample v-for="review in reviews" :review="review.problems" :date="review.createdAt"  />
        </div>
    </div>
</template>

<script setup lang="ts">


let reviews = ref<any>();

let router = useRoute();

let getReviews = async () => {
    let response = await $fetch(`/api/company/get-problems/${router.params.id}`);
    reviews.value = response.body.reviews as any;
    console.log(reviews.value);
};
getReviews();
</script>