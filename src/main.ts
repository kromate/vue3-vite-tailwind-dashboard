import { createApp } from 'vue'
import './assets/style/tailwind.css'
import App from './App.vue'
import VueApexCharts from "vue3-apexcharts";
import { router } from './router/index'


const app = createApp(App);
app.use(VueApexCharts);
app.use(router)
app.mount('#app')
