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

    <button
      v-if="previousPlaylists"
      @click="getPlaylists('previous')"
    >
      Previous
    </button>
    <button
      v-if="nextPlaylists"
      @click="getPlaylists('next')"
    >
      Next
    </button>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import { mapActions } from 'vuex';

export default {
  name: 'Playlists',
  computed: {
    ...mapFields('spotify', ['playlists', 'nextPlaylists', 'previousPlaylists'])
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
