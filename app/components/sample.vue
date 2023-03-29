<template>
    <div class="mt-2">
        <div class="flex flex-col mt-4">
            <div class=" p-2 rounded-md shadow-xl border">
                <p class="text-sm">
                    {{
                        review?.split('.').slice(0, 1).join('.')
                    }}
                </p>
                <p class="text-xs mt-2">{{
                    review?.split('.').slice(1).join('.')
                }}
                </p>
                <p class="text-[12px] text-black/75 mt-1 text-end">- {{
                    date?.split('T')[0]
                }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    review: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    }
})

</script>