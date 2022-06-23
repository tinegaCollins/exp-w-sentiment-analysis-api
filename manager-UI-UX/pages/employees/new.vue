<template>  
    <div class="new-wrapper">
        <h2>add a new employee</h2>
        <div class="data-to-send">
            <label for="name">name: </label>
            <input type="text" placeholder="name" id="name">
            <label for="department">department:</label>
            <input type="text" placeholder="enter a department" id="department">
            <label for="img">image</label>
            <input type="file" id="img" name="img" accept="image/*">
            <button>send</button>
        </div>
            <input type="image" src="" alt="">

    </div>
</template>

<script setup>


</script>

<style>

.new-wrapper {
    padding: 30px ;
}
.new-wrapper .data-to-send {
    display: flex;
    flex-direction: column;
}

</style>
