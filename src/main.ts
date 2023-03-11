
import { createApp } from 'vue';
import { createPinia } from 'pinia'


import 'element-plus/dist/index.css'
import './style/main.css'

import App from './App.vue'
import router from './router'


import { setupPlugins } from './plugins';
import { setupCustomComponents } from './components';

async function  bootstrap() {
    const app = createApp(App);

    setupPlugins(app);
    setupCustomComponents(app)
    app.use(createPinia());
    app.use(router);
    app.mount('#app')
}


bootstrap();









