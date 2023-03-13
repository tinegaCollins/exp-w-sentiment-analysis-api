<template>
    <div class="bg-[#F2F6FE] h-screen flex gap-3">
        <DashboardSideBar />
        <div class="w-full h-full border-black p-5 pt-5">
            <DashboardNavBar />
            <DashboardSummary />
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