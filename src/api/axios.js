import axios from 'axios';
import config from './config';

export default {
  create() {
    const URL = axios.create({
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`
      }
    });

    return URL;
  }
};
