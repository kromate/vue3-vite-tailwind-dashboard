import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/style/tailwind.css'
import { router as setupRouter } from '@/router'
import { RegisterComponents } from './plugins/components'

const init = async () => {
	const router = await setupRouter
	const app = createApp(App)
	await RegisterComponents(app)
	// await router.isReady()

	app.use(router).mount('#app')
}

init().then()

// merge sort 