<template>
  <VueApexCharts type="bar" :options="chartOptions" :series="series"></VueApexCharts>
</template>

<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";

const chartOptions = {
	series: [
		{
			data: [44, 55, 41, 64, 22, 43, 21],
		},
		{
			data: [53, 32, 33, 52, 13, 44, 32],
		},
	],
	chart: {
		background: "transparent",
		type: "bar",
		height: "auto",
		foreColor: "#fff",
		fontFamily: "'Chakra Petch', sans-serif",
		offsetX: 0,
		parentHeightOffset: 0,
		toolbar: {
			show: false,
		},
	},
	colors: ["rgba(255, 255, 255, 0.25)", "#3cd2a5"],
	plotOptions: {
		bar: {
			horizontal: false,
			borderRadius: 0,
			columnWidth: "20%",
			barHeight: "100%",
			dataLabels: {
				position: "top",
				maxItems: 1,
				hideOverflowingLabels: true,
			},
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		show: false,
	},
	tooltip: {
		shared: false,
		intersect: false,
	},
	xaxis: {
		// categories: [
		// 	2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
		// 	2013, 2014, 2015, 2016, 2017,
		// ],
	},
};
const series = [
	{
		name: "MEMORY USAGE",
		data: [
			80, 90, 95, 100, 99, 110, 120, 91, 130, 140, 145, 150, 149, 160, 170, 121,
		],
	},
	{
		name: "CPU USAGE",
		data: [
			130, 140, 145, 150, 149, 160, 170, 121, 80, 90, 95, 100, 99, 110, 120, 91,
		],
	},
];
</script>

<style scoped>
</style>