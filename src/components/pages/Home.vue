<template>
  <div>
    <h1>HOME PAGE</h1>

    <button @click="goToPlaylists">
      Check my playlists
    </button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToPlaylists() {
      this.$router.push({ path: '/playlists' });
    }
  }
};
</script>
