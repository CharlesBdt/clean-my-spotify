import { createWebHistory, createRouter } from 'vue-router';
import { isTokenExpired, setTokenToLocalStorage } from '@/plugins/helper';
import Login from '@/components/pages/Login.vue';
import Home from '@/components/pages/Home.vue';
import Playlist from '@/components/pages/Playlist.vue';
import Playlists from '@/components/pages/Playlists.vue';
import Search from '@/components/pages/Search.vue';
import Info from '@/components/pages/Info.vue';

const routes = [
  {
    path: '/',
    name: 'login',
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
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/info/:itemId',
    name: 'info',
    component: Info
  }
];

const scrollBehavior = () => {
  return { left: 0, top: 0 };
};

const history = createWebHistory();
const router = createRouter({
  history,
  routes,
  scrollBehavior
});

router.beforeEach((to, from, next) => {
  // Check has expired (1 hour length)
  isTokenExpired();

  // If not login page => check user auth
  if (to.path !== '/') {
    // If user is auth => access_token is in localStorage => go next
    if (localStorage.access_token) next();
    // If user is not auth => check if user is coming back from Spotify logging page (hash should be in the URL)
    else if (to.hash) {
      // Set Spotify token info into local storage
      setTokenToLocalStorage(to.hash);
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
