import { createApp } from 'vue'
import App from './App.vue'
import { defineInterfaceSpecs } from './interface/main'

const app = createApp(App)

defineInterfaceSpecs(app)

app.mount('#app')
