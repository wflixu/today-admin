import type { App } from "vue";


import ChromeTabs from './chrome-tabs/ChromeTabs.vue'
import FirefoxTabs from './firefox-tabs/FirefoxTabs.vue'
export function setupCustomComponents(app:App) {
    app.component('ChromeTabs', ChromeTabs)
    app.component('FirefoxTabs', FirefoxTabs)
}