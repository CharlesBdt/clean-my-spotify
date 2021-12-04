import { getField, updateField } from 'vuex-map-fields';
import API from '@/api/crud';
import URL from '@/api/config';

const getDefaultState = () => ({
  currentUser: [],
  currentTopArtists: [],
  currentTopTracks: []
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

  async getUserTopItems({ commit }, payload) {
    let userTopItemsUrl = `${URL.USER_TOP_ITEMS}${payload}`;

    const userTopItems = await API.get(userTopItemsUrl);

    // Uppercase the first letter of the string to get
    // either Artists or Tracks
    const type = `${payload.charAt(0).toUpperCase()}${payload.slice(1)}`;

    commit('setUserTopItems', [userTopItems, type]);
  },

  async getCurrentPlayingTrack({ commit }, payload) {
    let currentPlayingTrackUrl = `${URL.CURRENT_PLAYING_TRACK}`;

    const currentTrack = await API.get(currentPlayingTrackUrl);

    console.log('current', currentTrack);
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
  },

  setUserTopItems(state, payload) {
    // Dynamically create the state variable
    // either currentTopArtists or currentTopTracks
    const stateVariable = `currentTop${payload[1]}`;

    state[stateVariable] = payload[0].data;
  }
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
