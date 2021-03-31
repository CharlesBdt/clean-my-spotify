<template>
  <div>
    <h1>Playlist : {{ playlist.name }}</h1>

    <ul>
      <li
        v-for="track in tracks"
        :key="track.id"
      >
        {{ track.track.name }}
      </li>
    </ul>

    <Navigation
      :previous="previousTracks"
      :next="nextTracks"
      @listing="getTracks"
    />
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import { mapActions } from 'vuex';
import Navigation from '@/components/common/Navigation.vue';

export default {
  name: 'Playlist',
  components: {
    Navigation
  },
  computed: {
    ...mapFields('spotify', [
      'playlist',
      'tracks',
      'nextTracks',
      'previousTracks'
    ])
  },
  created() {
    this.getPlaylist(this.$route.params.playlistId);
  },
  methods: {
    ...mapActions({
      getPlaylist: 'spotify/getPlaylist',
      getTracks: 'spotify/getTracks'
    })
  }
};
</script>
