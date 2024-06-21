import { registerPlugins } from '@/plugins';
import '@/styles/main.scss';
import { createApp } from 'vue';

import App from './App.vue';

const app = createApp(App);

registerPlugins(app);

app.mount('#app');
