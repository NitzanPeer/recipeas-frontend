import './assets/styles/main.scss'

import { createApp } from 'vue'
import { store } from './store/store.js'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Adding Font Awesome icons to the library
library.add(fas)

const app = createApp(App)

// Using the Font Awesome component globally
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(store)

app.mount('#app')