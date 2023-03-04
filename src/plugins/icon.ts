import * as icons from "@element-plus/icons-vue";
import type { App } from "vue";

export const setupIcons = (app:App) =>{
    Object.entries(icons).forEach(([key,val])=>{
        let name = 'ep-' + key.toLocaleLowerCase();
        app.component(name,val);
    })
}