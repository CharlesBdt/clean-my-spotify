import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/router';
import store from '@/store';
import translation from '@/plugins/translation.js';
import '@/assets/scss/global.scss';
import '@/assets/scss/spacing.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSkiing } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSkiing);

const app = createApp(App);

app.config.globalProperties.$t = translation;

app.use(store)
  .use(router)
  .component('fa', FontAwesomeIcon)
  .mount('#app');
