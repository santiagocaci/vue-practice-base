import { createApp } from 'vue';
import App from './App.vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import router from './router';

import './style.css';

const app = createApp(App);

VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 120,
        refetchOnReconnect: 'always',
      },
    },
  },
});

app.use(router);

app.mount('#app');

// createApp(App).use(VueQueryPlugin).use(router).mount('#app');
