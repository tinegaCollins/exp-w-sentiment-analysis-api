<template>
    <div>
      <h1 class="text-center mb-2">How easy it is to use your product</h1>
      <Pie v-if="loaded" :data="chartData" />
    </div>
  </template>
    
  <script lang="ts" setup>
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  import { Pie } from 'vue-chartjs'
  
  ChartJS.register(ArcElement, Tooltip, Legend)
  let chartData = ref({
    labels: ['Very Easy', 'Easy', 'Moderate', 'Difficult', 'Very Difficult'],
    datasets: [
      {
        labels: ['Red', 'Blue', 'Yellow'],
        backgroundColor: ['#FF5733', 'green', '#900C3F', '#581845', '#900C3F' ],
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
      `/api/company/get-ease/${router.params.id}`
    );
    let data = response.body.ease
    console.log(data);
    chartData.value.datasets[0].data = data
    loaded.value = true
  }
  getChartData()

  </script>