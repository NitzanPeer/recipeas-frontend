import './assets/styles/main.scss'

import { createApp } from 'vue'
import { store } from './store/store.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')