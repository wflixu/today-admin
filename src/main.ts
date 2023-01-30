import { createApp } from 'vue';
import { createPinia } from 'pinia'


import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import { setupPlugins } from './plugins';

async function  bootstrap() {
    const app = createApp(App);

    setupPlugins(app);
    app.use(createPinia());
    app.use(router);
    app.mount('#app')
}


bootstrap();






