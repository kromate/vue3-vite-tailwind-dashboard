<template>
  <DefaultLayout>
    Hello World!
    <div id="world-map" style="width: 600px; height: 400px"></div>
    <!-- <VueApexCharts width="220" height="90" type="bar" :options="chartOptions" :series="series"></VueApexCharts> -->
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { onMounted } from "vue";

// import VueApexCharts from "vue3-apexcharts";

// const chartOptions = {
// 	chart: {
// 		id: "basic-bar",
// 		zoom: {
// 			enabled: false,
// 			type: "y",
// 			autoScaleYaxis: true,
// 		},
// 	},
// };
// const series = [
// 	{
// 		name: "series-1",
// 		data: [30, 40, 45, 50, 49, 60, 70, 91],
// 	},
// ];
</script>

<style scoped></style>
