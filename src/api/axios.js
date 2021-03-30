import axios from 'axios';
import config from './config';

export default {
  create() {
    const URL = axios.create({
      baseURL: config.BASE_URL,
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`
      }
    });

    return URL;
  }
};
