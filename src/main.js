import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import * as bootstrap from 'bootstrap'
import './styles/main.css'

import router from './router'
import { createApp } from 'vue'
import App from './App.vue'

// Make bootstrap available globally
window.bootstrap = bootstrap

createApp(App).use(router).mount('#app')