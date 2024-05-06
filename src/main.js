import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Preline from 'preline/dist/preline'
import App from './App.vue'
import router from './router'
import  'bootstrap-icons/font/bootstrap-icons.min.css';

const app = createApp(App)

app.use(createPinia())
app.use(Preline)
app.use(router)


app.mount('#app')
