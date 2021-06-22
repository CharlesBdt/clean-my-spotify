import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/router';
import store from '@/store';
import language from '@/plugins/translation.js';
import '@/assets/scss/global.scss';
import '@/assets/scss/spacing.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSkiing } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSkiing);

const app = createApp(App);

// Config language package for translation
app.config.globalProperties.$t = language.en;

app.use(store)
  .use(router)
  .component('fa', FontAwesomeIcon)
  .mount('#app');
