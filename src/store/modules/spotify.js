import { getField, updateField } from 'vuex-map-fields';

const getDefaultState = () => ({});

const namespaced = true;

const state = () => getDefaultState();

const getters = {
  getField
};

const actions = {};

const mutations = {
  updateField
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
