import { createStore } from 'vuex';

import album from '@/store/modules/album';
import auth from '@/store/modules/auth';
import playlist from '@/store/modules/playlist';
import user from '@/store/modules/user';

const store = createStore({
  modules: {
    album,
    auth,
    playlist,
    user
  }
});

export default store;
