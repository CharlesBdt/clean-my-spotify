import { createStore } from 'vuex';

import auth from '@/store/modules/auth';
import playlist from '@/store/modules/playlist';
import user from '@/store/modules/user';

const store = createStore({
  modules: {
    auth,
    playlist,
    user
  }
});

export default store;
