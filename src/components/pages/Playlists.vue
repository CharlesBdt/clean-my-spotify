<template>
  <div>
    PLAYLISTS
    <div
      v-for="playlist in playlists"
      :key="playlist.id"
    >
      {{ playlist.name }}
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import { mapActions } from 'vuex';

export default {
  name: 'Playlists',
  computed: {
    ...mapFields('spotify', ['playlists'])
  },
  created() {
    this.getPlaylists();
  },
  methods: {
    ...mapActions({
      getPlaylists: 'spotify/getPlaylists'
    })
  }
};
</script>
