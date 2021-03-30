import { getField, updateField } from 'vuex-map-fields';
import API from '@/api/crud';
import URL from '@/api/config';

const getDefaultState = () => ({
  playlists: []
});

const namespaced = true;

const state = () => getDefaultState();

const getters = {
  getField
};

const actions = {
  async getPlaylists({ commit }) {
    const playlists = await API.get(URL.USER_PLAYLISTS);
    commit('setPlaylists', playlists);
  }
};

const mutations = {
  updateField,

  setPlaylists(state, payload) {
    state.playlists = payload.data.items;
  }
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
