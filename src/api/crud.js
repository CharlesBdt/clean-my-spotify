import axios from './axios';

export default {
  // Get
  async get(endpoint) {
    return axios
      .create()
      .get(endpoint)
      .then((response) => response)
      .catch((error) => error);
  },

  // Create
  async post(endpoint, data) {
    return axios
      .create()
      .post(endpoint, data)
      .then((response) => response)
      .catch((error) => error);
  },

  // Update
  async put(endpoint, data) {
    return axios
      .create()
      .put(endpoint, data)
      .then((response) => response)
      .catch((error) => error);
  },

  // Delete
  async delete(endpoint, data) {
    return axios
      .create()
      .delete(endpoint, data)
      .then((response) => response)
      .catch((error) => error);
  }
};
