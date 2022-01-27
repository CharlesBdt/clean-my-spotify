import { getField, updateField } from 'vuex-map-fields';
import API from '@/api/crud';
import URL from '@/api/config';

const getDefaultState = () => ({
  itemInfo: []
});

const namespaced = true;

const state = () => getDefaultState();

const getters = {
  getField
};

const actions = {
  async getItemInfo({ commit }, payload) {
    // let newReleaseUrl = URL.ALBUM_NEW_RELEASE;

    // const newReleases = await API.get(newReleaseUrl);
    // commit('setNewReleases', newReleases);
  }
};

const mutations = {
  updateField,

  resetState(currentState) {
    Object.assign(currentState, getDefaultState());
  },

  setItemInfo(state, payload) {
    state.itemInfo = payload.data;
  }
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
