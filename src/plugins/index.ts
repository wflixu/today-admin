import type { App } from "vue";
import ElementPlus from 'element-plus';
import { setupIcons } from "./icon";

export function setupPlugins(app: App) {
    app.use(ElementPlus);
    setupIcons(app)
}