<template>
    <Line id="my-chart-id" v-if="loaded" :options="chartOptions" :data="chartData" />
</template>
  
<script setup>
import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
// todays day of the week
let day = new Date().getDay()
// get the day of the week for the past 7 days
let days = []
for (let i = 0; i < 7; i++) {
    let d = new Date()
    d.setDate(d.getDate() - i)
    days.push(d.getDay())
}
days.reverse()
// get the day of the week for the past 7 days
let labels = []
for (let i = 0; i < 7; i++) {
    let d = new Date()
    d.setDate(d.getDate() - i)
    labels.push(d.toLocaleDateString())
}
labels.reverse()
console.log(labels)
let chartData = ref(
    {
        labels: labels,
        datasets: [{ data: [], label: 'Total Reviews', backgroundColor: 'rgb(250,128,114)' }],
    }
)
let chartOptions = ref({
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'A review of the past 7 days',
        }
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
})
let router = useRoute();
let loaded = ref(false)
let getChartData = async () => {
  let response = await $fetch(
    `/api/company/get-7days/${router.params.id}`
  );
  let data = response.body.data.total
  console.log(data);
  chartData.value.datasets[0].data = data
  loaded.value = true
}
getChartData()
</script>