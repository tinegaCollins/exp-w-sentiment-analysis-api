<template>
  <Pie :data="chartData" />
</template>
  
<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'BarChart',
  components: { Pie },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March', 'April','may'],
        datasets: [
          {
            labels: ['Red', 'Blue', 'Yellow', 'Green'],
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#FFC300'],
            data: [40, 20, 80, 10, 100]
          }
        ]
      }
    }
  }
}
</script>