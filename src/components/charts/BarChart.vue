<template>
  <Bar :chart-options="chartOptions" :chart-data="chartData" />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default {
  name: "BarChart",
  components: { Bar },

  data() {
    return {
      chartData: {
        labels: ["", "", ""],
        backgroundColor: "#3cd2a5",
        datasets: [{ data: [40, 20, 12] }],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>
