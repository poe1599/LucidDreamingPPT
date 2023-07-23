import './css/tailwind.css'
import './css/main.css'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/beige.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
