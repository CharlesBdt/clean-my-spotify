import { createStore } from 'vuex';

import auth from '@/store/modules/auth';
import spotify from '@/store/modules/spotify';

const store = createStore({
  modules: {
    auth,
    spotify
  }
});

export default store;
