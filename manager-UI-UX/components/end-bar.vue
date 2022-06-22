<template>
<div class="end">
    <div class="date">
        <input type="date" name="" id="date" ref="date">
    </div>
</div>
</template>

<script setup>

const input = ref(null );
onMounted(() => {
  let date = document.getElementById('date');
  date.autofocus = true;
})

</script>

<style>

.end {
    padding: 30px;
    width: 350px;
    height: 100%;
}
</style>