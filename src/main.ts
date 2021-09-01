import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import {createPinia} from 'pinia';
import {PiniaSharedState} from 'pinia-shared-state';
import routes from 'virtual:generated-pages';
import '@fontsource/poppins';
import App from './App.vue';
import './main.css';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const pinia = createPinia()
  .use(PiniaSharedState({enable: true, initialize: true}));

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app');
