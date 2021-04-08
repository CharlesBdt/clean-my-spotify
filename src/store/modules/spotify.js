import { getField, updateField } from 'vuex-map-fields';
import helpers from '@/plugins/helpers';
import API from '@/api/crud';
import URL from '@/api/config';

const getDefaultState = () => ({
  playlists: [],
  nextPlaylists: null,
  previousPlaylists: null,
  playlist: [],
  tracks: [],
  nextTracks: null,
  previousTracks: null,
  playlistGenres: []
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

    // Dynamic URL to get playlist tracks
    // Based on the button clicked
    if (payload === 'next' && state.nextTracks) {
      tracksUrl = state.nextTracks;
    }
    if (payload === 'previous' && state.previousTracks) {
      tracksUrl = state.previousTracks;
    }

    const tracks = await API.get(tracksUrl);
    commit('setTracks', tracks);
  },

  async getPlaylistGenres({ commit, state }) {
    // Fetch all the tracks artists ID from the playlist
    let artistIdArray = new Set();
    state.tracks.forEach(t => {
      t.track.artists.forEach(a => {
        artistIdArray.add(a.id);
      });
    });

    // Chunk artists ID array in multiple arrays
    // Spotify API doesn't accept more than 49 IDs
    let artistIdSubArrays = helpers.chunkArray(Array.from(artistIdArray), 49);


    // Get artists info to Spotify API for each subArrays
    let artistsInfoArray = [];

    for (const artistIdSubArray of artistIdSubArrays) {
      const artistsIdString = artistIdSubArray.join(',');
      const artistsInfoUrl = `${URL.ARTISTS_INFO}?ids=${artistsIdString}`;

      const artistsInfoSubArray = await API.get(artistsInfoUrl);
      // Push API output to general array
      artistsInfoArray.push(artistsInfoSubArray.data.artists);
    };

    // Process artists info to extract artists genres
    const artistsInfo = artistsInfoArray.flat();
    const playlistGenresArray = [];

    artistsInfo.forEach(a => {
      playlistGenresArray.push(a.genres);
    });

    // Clean duplicates
    const playlistGenres = playlistGenresArray.flat();
    let genres = new Set(playlistGenres);

    commit('setPlaylistGenres', genres);
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
  },

  setPlaylistGenres(state, payload) {
    state.playlistGenres = payload;
  }
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
