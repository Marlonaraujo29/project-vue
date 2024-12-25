import './assets/main.css'

// Importando Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'


import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router); // Certifique-se de usar o roteador
app.mount('#app');