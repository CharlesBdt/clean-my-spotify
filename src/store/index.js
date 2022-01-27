import { createStore } from 'vuex';

import album from '@/store/modules/album';
import auth from '@/store/modules/auth';
import item from '@/store/modules/item';
import playlist from '@/store/modules/playlist';
import user from '@/store/modules/user';

const store = createStore({
  modules: {
    album,
    auth,
    item,
    playlist,
    user
  }
});

export default store;
