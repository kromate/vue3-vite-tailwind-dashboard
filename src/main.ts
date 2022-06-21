import { createApp } from 'vue'
import './assets/style/tailwind.css'
import App from './App.vue'

import { router } from './router/index'


const app = createApp(App);
app.use(router)
app.mount('#app')


// merge sort 