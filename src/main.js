import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/router';
import store from '@/store';
import '@/assets/scss/global.scss';
import '@/assets/scss/spacing.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSkiing } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSkiing);

createApp(App)
  .use(store)
  .use(router)
  .component('fa', FontAwesomeIcon)
  .mount('#app');
