<script setup lang="ts">
let router = useRoute();
console.log(router.params.id);
interface Company {
    name: string;
    id: string;
    totalReviews: number;
    last6Hours: number;
    satisfied: number;
    unsatisfied: number;
    neutral: number;
}
let company = ref<Company>();
let getOverllDetails = async () => {
    let response = await $fetch(
        `/api/company/get-overall-details/${router.params.id}`
    );
    company.value = response.body as Company;
};
getOverllDetails();
</script>
<template>
    <div class="bg-[#F2F6FE] h-screen flex gap-3">
        <DashboardSideBar class="fixed top-0 left-0" />
        <div class="w-[calc(100vw-250px)] relative left-[250px] h-full border-black p-5 pt-5">
            <DashboardNavBar :name="company?.name" />
            <DashboardSummary :last6-hours="company?.last6Hours" :total-reviews="company?.totalReviews"
                :satisfied="company?.satisfied" :unsatisfied="company?.unsatisfied" :neutral="company?.neutral" />
            <DashboardSampleRev />
            <div class="flex gap-10 mt-3">
                <div class="w-4/6 bg-green-400 grid place-items-center shadow-lg">
                    <DashboardLineChart class="h-max w-full" />
                </div>
                <div class="w-2/6">
                    <DashboardPieChart />
                </div>
            </div>
        </div>
    </div>
</template>