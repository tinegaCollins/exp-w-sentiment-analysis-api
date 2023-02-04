<template>
    <div class="">
        <MainLogin @sign-up="switchTab" v-if="activeTab" />
        <MainSignup @login="switchTab" v-else/>
    </div>
</template>

<script setup lang="ts">
import { Company } from '~~/types/company';
let activeTab = ref(true);
function switchTab() {
    activeTab.value = !activeTab.value;
}
let company = ref<Company>({
    name: '',
    email: '',
    password: '',
});

async function signIn() {
    console.log(company.value);
}

async function signUp() {
    await $fetch('/api/auth/create-account', {
        method: 'POST',
        body: JSON.stringify(company.value),
    }).then((res) => {
        console.log(res);
    });
}

</script>
