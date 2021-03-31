import { createWebHistory, createRouter } from 'vue-router';
import helpers from '@/plugins/helpers';
import Login from '@/components/pages/Login.vue';
import Home from '@/components/pages/Home.vue';
import Playlist from '@/components/pages/Playlist.vue';
import Playlists from '@/components/pages/Playlists.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/playlist/:playlistId',
    name: 'playlist',
    component: Playlist
  },
  {
    path: '/playlists',
    name: 'playlists',
    component: Playlists
  }
];

const history = createWebHistory();
const router = createRouter({
  history,
  routes
});

router.beforeEach((to, from, next) => {
  // Check has expired (1 hour length)
  helpers.isTokenExpired();

  // If not login page => check user auth
  if (to.path !== '/') {
    // If user is auth => access_token is in localStorage => go next
    if (localStorage.access_token) next();
    // If user is not auth => check if user is coming back from Spotify logging page (hash should be in the URL)
    else if (to.hash) {
      // Set Spotify token info into local storage
      helpers.setTokenToLocalStorage(to.hash);
      next('/home');
    }
    // If user not auth AND hash not in URL => redirect to login
    else next('/');
  } else if (to.path === '/' && localStorage.access_token)
    // If user on login page BUT is already signed in => redirect to home page
    next('/home');
  else next();
});

export default router;
