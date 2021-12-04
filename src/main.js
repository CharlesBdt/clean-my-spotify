import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/router';
import store from '@/store';
import language from '@/plugins/translation.js';
import filters from '@/plugins/filters.js';
import '@/assets/scss/cards.scss';
import '@/assets/scss/global.scss';
import '@/assets/scss/grids.scss';
import '@/assets/scss/modals.scss';
import '@/assets/scss/spacing.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSkiing, faExclamationTriangle, faMusic, faCompactDisc, faUserAlt, faChartLine, faCalendarAlt, faThList, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Manually load the icon used
library.add(faSkiing, faExclamationTriangle, faMusic, faCompactDisc, faUserAlt, faChartLine, faCalendarAlt, faThList, faAngleDoubleRight);

const app = createApp(App);

// Config language package for translation
app.config.globalProperties.$t = language.en;
// Add filters
app.config.globalProperties.$f = filters;

app.use(store)
  .use(router)
  .component('fa', FontAwesomeIcon)
  .mount('#app');
