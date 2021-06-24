<template>
  <div class="wrapper head-main-footer-area">
    <div class="banner">
      <p class="header-text mt-5">
        <b>{{ playlist.name }}</b> - {{ totalSongs }} {{ $t.songs }}
      </p>
      <p class="header-subtext">
        <em>{{ $t.createdBy }} {{ playlistOwner }}</em>
      </p>

      <p class="mt-4">
        Genres :
      </p>
      {{ totalGenres }}
    </div>

    <div class="songs-area">
      <TrackCard v-for="track in tracks" :key="track.track.id" :track="track" />
    </div>

    <div class="footer-area">
      <Navigation
        :previous="previousTracks"
        :next="nextTracks"
        @listing="getTracks"
      />
    </div>
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
      'previousTracks',
      'playlistGenres'
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
    },

    totalGenres() {
      return [...this.playlistGenres].join(', ');
    }
  },
  watch: {
    playlist() {
      if (this.playlist) this.getPlaylistGenres();
    }
  },
  async created() {
    await this.getPlaylist(this.$route.params.playlistId);
  },
  methods: {
    ...mapActions({
      getPlaylist: 'spotify/getPlaylist',
      getTracks: 'spotify/getTracks',
      getPlaylistGenres: 'spotify/getPlaylistGenres'
    })
  }
};
</script>

<style lang="scss">
.songs-area {
  display: grid;
  grid-area: main;
  grid-template-columns: repeat(auto-fit, minmax(304px, 1fr));
  grid-auto-rows: 180px;
}
</style>
