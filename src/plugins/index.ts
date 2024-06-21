import { createPinia } from 'pinia';
import type { App } from 'vue';
import router from './router';
import vuetify from './vuetify.ts';


export function registerPlugins(app: App) {
  app.use(createPinia());
  app.use(vuetify);
  app.use(router);

}
