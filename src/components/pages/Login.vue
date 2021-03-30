<template>
  <button @click="logInUser()">
    Log in to Spotify
  </button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  methods: {
    ...mapActions({
      logInUser: 'auth/logInUser'
    })
  }
};
</script>
