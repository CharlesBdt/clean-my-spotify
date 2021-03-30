import axios from './axios';

export default {
  // Get
  async get(endpoint) {
    return axios
      .create()
      .get(endpoint)
      .then((response) => response);
  },

  // Create
  async post(endpoint, data) {
    return axios
      .create()
      .put(endpoint, data)
      .then((response) => response);
  },

  // Update
  async put(endpoint, data) {
    return axios
      .create()
      .put(endpoint, data)
      .then((response) => response);
  },

  // Delete
  async delete(endpoint, data) {
    return axios
      .create()
      .put(endpoint, data)
      .then((response) => response);
  }
};
