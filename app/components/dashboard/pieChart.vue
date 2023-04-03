<template>
  <div>
    <h1 class="text-center mb-2">How customers feel about our product/service</h1>
    <Pie v-if="loaded" :data="chartData" />
  </div>
</template>
  
<script lang="ts" setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)
let chartData = ref({
  labels: ['Positive', 'Neutral', 'Negative'],
  datasets: [
    {
      labels: ['Red', 'Blue', 'Yellow'],
      backgroundColor: ['#41B883', '#00D8FF', '#E46651' ],
      data: [3, 3, 10]
    }
  ], chartOptions: {
    responsive: true,
    //add more options here
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
    backgroundColor: 'rgb(250,128,114)',
  }
})
let router = useRoute();
let loaded = ref(false)
let getChartData = async () => {
  let response = await $fetch(
    `/api/company/get-average/${router.params.id}`
  );
  let data = response.body.data.numbers
  console.log(data);
  chartData.value.datasets[0].data = data
  loaded.value = true
}
getChartData()
onMounted(() => {
  // @ts-ignore
})
</script>