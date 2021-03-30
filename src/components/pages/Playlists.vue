<template>
  <div>
    <h1>
      PLAYLISTS
    </h1>

    <ul>
      <li
        v-for="playlist in playlists"
        :key="playlist.id"
      >
        {{ playlist.name }}
      </li>
    </ul>
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
