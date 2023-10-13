import { createApp } from "vue"
import { createPinia } from "pinia"
import PrimeVue from "primevue/config";
import Chart from 'primevue/chart';
import 'primeicons/primeicons.css';

import "../src/index.css"

// theme
import "primevue/resources/themes/lara-light-blue/theme.css";

// core
import "primevue/resources/primevue.min.css";
import "./assets/styles/css/v.css"
import "./assets/animate.css"

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.component("Chart", Chart)
app.use(PrimeVue);
app.use(createPinia())
app.use(router)

app.mount('#app')
