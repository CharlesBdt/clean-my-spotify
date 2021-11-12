import { getField, updateField } from 'vuex-map-fields';
import API from '@/api/crud';
import URL from '@/api/config';

const getDefaultState = () => ({
  newReleases: [],
  newAlbums: [],
  nextNewAlbums: null,
  previousNewAlbums: null
});

const namespaced = true;

const state = () => getDefaultState();

const getters = {
  getField
};

const actions = {
  async getNewReleases({ commit }, payload) {
    let newReleaseUrl = URL.ALBUM_NEW_RELEASE;

    const newReleases = await API.get(newReleaseUrl);
    commit('setNewReleases', newReleases);
  }
};

const mutations = {
  updateField,

  resetState(currentState) {
    Object.assign(currentState, getDefaultState());
  },

  setNewReleases(state, payload) {
    state.newReleases = payload.data;
    state.newAlbums = payload.data.albums.items;
    state.nextNewAlbums = payload.data.albums.next;
    state.previousNewAlbums = payload.data.albums.previous;
  }
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
