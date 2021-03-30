import { getField, updateField } from 'vuex-map-fields';

const getDefaultState = () => ({
  client_id: process.env.VUE_APP_CLIENT_ID,
  spotify_authorize_endpoint: process.env.VUE_APP_SPOTIFY_AUTHORIZE_ENDPOINT,
  redirect_url_after_login: process.env.VUE_APP_REDIRECT_URL_AFTER_LOGIN,
  scopes: [
    'playlist-modify-public',
    'playlist-modify-private',
    'playlist-read-private',
    'playlist-read-collaborative'
  ],
  scopes_separator: '%20'
});

const namespaced = true;

const state = () => getDefaultState();

const getters = {
  getField
};

const actions = {
  logInUser({ state }) {
    window.location = `${state.spotify_authorize_endpoint}?client_id=${
      state.client_id
    }&redirect_uri=${state.redirect_url_after_login}&scope=${state.scopes.join(
      state.scopes_separator
    )}&response_type=token`;
  }
};

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
