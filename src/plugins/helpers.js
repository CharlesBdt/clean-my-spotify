import moment from 'moment';

export default {
  isTokenExpired() {
    // Check localStorage datetime
    // If 1 hour has passed => clear storage
    const date = moment();
    const tokenDate = localStorage.timestamp;

    if (date.subtract(1, 'hours').isAfter(tokenDate)) {
      window.localStorage.clear();
    }
  },

  setTokenToLocalStorage(hash) {
    // Spotify hash is composed of 3 key/value : access_token, token_type and expires_in
    // Store them in localStorage
    const stringAfterHash = hash.substring(1);
    const paramsInHash = stringAfterHash.split('&');

    paramsInHash.forEach((e) => {
      const [key, value] = e.split('=');
      localStorage.setItem(key, value);
    });

    // Add a timestamp to auto delete the token after an hour
    localStorage.setItem('timestamp', moment().format());
  }
};
