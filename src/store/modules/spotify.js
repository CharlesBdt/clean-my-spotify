import { getField, updateField } from 'vuex-map-fields';
import API from '@/api/crud';
import URL from '@/api/config';

const getDefaultState = () => ({
  playlists: [],
  nextPlaylists: null,
  previousPlaylists: null,
  playlist: [],
  tracks: [],
  nextTracks: null,
  previousTracks: null
});

const namespaced = true;

const state = () => getDefaultState();

const getters = {
  getField
};

const actions = {
  async getPlaylists({ commit, state }, payload) {
    // Default URL to get the user playlists
    let userPlaylistsUrl = URL.USER_PLAYLISTS;

    // Dynamic URL to get user playlists
    // Based on the button clicked
    if (payload === 'next' && state.nextPlaylists) {
      userPlaylistsUrl = state.nextPlaylists;
    }
    if (payload === 'previous' && state.previousPlaylists) {
      userPlaylistsUrl = state.previousPlaylists;
    }

    const playlists = await API.get(userPlaylistsUrl);
    commit('setPlaylists', playlists);
  },

  async getPlaylist({ commit }, payload) {
    let playlistUrl = `${URL.USER_PLAYLIST}${payload}`;

    const playlist = await API.get(playlistUrl);
    commit('setPlaylist', playlist);
  },

  async getTracks({ commit, state }, payload) {
    let tracksUrl = null;

    if (payload === 'next' && state.nextTracks) {
      tracksUrl = state.nextTracks;
    }
    if (payload === 'previous' && state.previousTracks) {
      tracksUrl = state.previousTracks;
    }

    const tracks = await API.get(tracksUrl);
    commit('setTracks', tracks);
  }
};

const mutations = {
  updateField,

  setPlaylists(state, payload) {
    state.playlists = payload.data.items;
    state.nextPlaylists = payload.data.next;
    state.previousPlaylists = payload.data.previous;
  },

  setPlaylist(state, payload) {
    state.playlist = payload.data;
    state.tracks = payload.data.tracks.items;
    state.nextTracks = payload.data.tracks.next;
    state.previousTracks = payload.data.tracks.previous;
  },

  setTracks(state, payload) {
    state.tracks = payload.data.items;
    state.nextTracks = payload.data.next;
    state.previousTracks = payload.data.previous;
  }
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
