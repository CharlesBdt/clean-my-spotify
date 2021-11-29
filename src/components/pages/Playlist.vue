<template>
  <div class="wrapper grid-head-main-footer-area">
    <div class="header-area">
      <Header :back-btn="playlistsRoute">
        <template #title>
          <div class="header-text mt-5">
            <b>{{ playlist.name }}</b> - {{ totalSongs }} {{ $t.songs }}
          </div>
          <p class="header-subtext">
            <em>{{ $t.createdBy }} {{ playlistOwner }}</em>
          </p>
        </template>
      </Header>
    </div>
    <!-- <p class="mt-4"><b>Genres</b> {{ totalGenres }}</p> -->

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
import { mapState } from 'vuex';
import { mapActions } from 'vuex';
import TrackCard from '@/components/cards/TrackCard.vue';
import Header from '@/components/common/Header.vue';
import Navigation from '@/components/common/Navigation.vue';

export default {
  name: 'Playlist',
  components: {
    TrackCard,
    Header,
    Navigation
  },
  data() {
    return {
      playlistsRoute: 'playlists'
    };
  },
  computed: {
    ...mapState({
      playlist: (state) => state.playlist.playlist,
      playlistGenres: (state) => state.playlist.playlistGenres,
      tracks: (state) => state.playlist.tracks,
      nextTracks: (state) => state.playlist.nextTracks,
      previousTracks: (state) => state.playlist.previousTracks
    }),

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
      getPlaylist: 'playlist/getPlaylist',
      getTracks: 'playlist/getTracks',
      getPlaylistGenres: 'playlist/getPlaylistGenres'
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
