<template>
    <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
  
<script>
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

export default {
    name: 'BarChart',
    components: { Line },
    data() {
        return {
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{ data: [40, 39, 10, 40, 39, 80, 40], label: 'Total Reviews', backgroundColor: 'rgb(250,128,114)'  }],
            },
            chartOptions: {
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
        }
    }
}
</script>