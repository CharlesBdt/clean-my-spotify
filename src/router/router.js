import { createWebHistory, createRouter } from 'vue-router';
import store from '@/store';
import Login from '@/components/pages/Login.vue';
import Home from '@/components/pages/Home.vue';
import Playlists from '@/components/pages/Playlists.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
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
  // If not login page => check user auth
  if (to.path !== '/') {
    // If user is auth => access_token is in localStorage => go next
    if (localStorage.access_token) next();
    // If user is not auth => check if user is coming back from Spotify logging page (hash should be in the URL)
    else if (to.hash) {
      const stringAfterHash = to.hash.substring(1);
      const paramsInHash = stringAfterHash.split('&');

      // Spotify hash is composed of 3 key/value : access_token, token_type and expires_in
      // Store them in localStorage
      paramsInHash.forEach((e) => {
        const [key, value] = e.split('=');
        localStorage.setItem(key, value);
      });
    }
    // If user not auth AND hash not in URL => redirect to login
    else next('/');
  } else if (to.path === '/' && localStorage.access_token)
    // If user on login page BUT is already signed in => redirect to home page
    next('/home');
  else next();
});

export default router;
