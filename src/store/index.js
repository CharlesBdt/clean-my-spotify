import { createStore } from 'vuex';

import spotify from '@/store/modules/spotify';

const store = createStore({
  modules: {
    spotify
  }
});

export default store;
