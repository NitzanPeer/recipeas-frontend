import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App)

app.use(router)

app.mount('#app')

// import "bootstrap/dist/js/bootstrap.js"





/*

TODO:
1. Delete works but displays an error -
    "[Violation] 'click' handler took 845ms"

2. Update works but displays an error -
    "Error updating recipe: SyntaxError: Unexpected end of JSON input at Object.updateRecipe"
    also:
    "VM115744:1 Uncaught (in promise) SyntaxError: Unexpected end of JSON input"


Understand:
1. router importing



*/