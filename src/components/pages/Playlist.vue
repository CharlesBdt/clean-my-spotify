<template>
  <div>
    <p>
      <b>Name : {{ playlist.name }}</b> ({{ totalSongs }}) songs
    </p>
    <p>Created by : {{ playlistOwner }}</p>

    <TrackCard
      v-for="track in tracks"
      :key="track.track.id"
      :track="track"
    />

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
import TrackCard from '@/components/cards/TrackCard.vue';
import Navigation from '@/components/common/Navigation.vue';

export default {
  name: 'Playlist',
  components: {
    TrackCard,
    Navigation
  },
  computed: {
    ...mapFields('spotify', [
      'playlist',
      'tracks',
      'nextTracks',
      'previousTracks'
    ]),

    totalSongs() {
      return this.playlist && this.playlist.tracks
        ? this.playlist.tracks.total
        : 0;
    },

    playlistOwner() {
      return this.playlist && this.playlist.owner
        ? this.playlist.owner.display_name
        : 'N/A';
    }
  },
  async created() {
    await this.getPlaylist(this.$route.params.playlistId);
  },
  methods: {
    ...mapActions({
      getPlaylist: 'spotify/getPlaylist',
      getTracks: 'spotify/getTracks'
    })
  }
};
</script>
