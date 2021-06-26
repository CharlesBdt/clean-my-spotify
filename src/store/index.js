import { createStore } from 'vuex';

import auth from '@/store/modules/auth';
import spotify from '@/store/modules/spotify';
import user from '@/store/modules/user';

const store = createStore({
  modules: {
    auth,
    spotify,
    user
  }
});

export default store;
