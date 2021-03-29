import { createWebHistory, createRouter } from 'vue-router';
import store from '@/store';
import Home from '@/components/Home.vue';
import Playlists from '@/components/pages/Playlists.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/playlists',
    name: 'Playlists',
    component: Playlists
  }
];

const history = createWebHistory();
const router = createRouter({
  history,
  routes
});

router.beforeEach((to, from, next) => {
  // If the user already auth, the access_token is in localStorage
  if (localStorage.access_token) next();
  // If not, check if the user is coming back from Spotify logging page, hash is in the URL
  else if (to.hash) {
    const stringAfterHash = to.hash.substring(1);
    const paramsInHash = stringAfterHash.split('&');

    // Spotify hash is composed of 3 key/value : access_token, token_type and expires_in
    paramsInHash.forEach((e) => {
      const [key, value] = e.split('=');
      localStorage.setItem(key, value);
    });
  } else {
    // Otherwise, redirect the user to the login page
    const { spotify } = store.state;

    window.location = `${spotify.spotify_authorize_endpoint}?client_id=${
      spotify.client_id
    }&redirect_uri=${
      spotify.redirect_url_after_login
    }&scope=${spotify.scopes.join(
      spotify.scopes_separator
    )}&response_type=token&show_dialog=true`;
  }
});

export default router;
