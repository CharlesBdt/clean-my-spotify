import { getField, updateField } from 'vuex-map-fields';
import API from '@/api/crud';
import URL from '@/api/config';

const getDefaultState = () => ({
  playlists: [],
  nextPlaylists: null,
  previousPlaylists: null
});

const namespaced = true;

const state = () => getDefaultState();

const getters = {
  getField
};

const actions = {
  async getPlaylists({ commit, state }, payload) {
    // Default URL to get the user playlists
    let urlUserPlaylists = URL.USER_PLAYLISTS;

    // Dynamic URL to get user playlists
    // Based on the button clicked
    if (payload === 'next' && state.nextPlaylists) {
      urlUserPlaylists = state.nextPlaylists;
    }
    if (payload === 'previous' && state.previousPlaylists) {
      urlUserPlaylists = state.previousPlaylists;
    }

    const playlists = await API.get(urlUserPlaylists);
    commit('setPlaylists', playlists);
  }
};

const mutations = {
  updateField,

  setPlaylists(state, payload) {
    state.playlists = payload.data.items;
    state.nextPlaylists = payload.data.next;
    state.previousPlaylists = payload.data.previous;
  }
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
