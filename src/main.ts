import { createApp } from 'vue'
import './assets/style/tailwind.css'
import App from './App.vue'
import { router } from './router/index'
import { RegisterComponents } from './plugins/Components'
// import 

const app = createApp(App);
RegisterComponents(app)
app.use(router)
app.mount('#app')


// merge sort 