import type { App } from "vue";
import ElementPlus from 'element-plus';

export function setupPlugins(app: App) {
    app.use(ElementPlus);
}