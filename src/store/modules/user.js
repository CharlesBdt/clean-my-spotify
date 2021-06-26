import { getField, updateField } from 'vuex-map-fields';
import API from '@/api/crud';
import URL from '@/api/config';

const getDefaultState = () => ({
  currentUser: []
});

const namespaced = true;

const state = () => getDefaultState();

const getters = {
  getField
};

const actions = {
  async getCurrentUser({ commit }, payload) {
    let currentUserUrl = URL.CURRENT_USER;

    const currentUser = await API.get(currentUserUrl);

    commit('setCurrentUser', currentUser);
  },

  resetState({ commit }) {
    commit('resetState');
  }
};

const mutations = {
  updateField,

  resetState(currentState) {
    Object.assign(currentState, getDefaultState());
  },

  setCurrentUser(state, payload) {
    state.currentUser = payload.data;
  }
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
