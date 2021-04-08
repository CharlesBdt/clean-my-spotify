<template>
  <div>
    <p>
      <b>Name : {{ playlist.name }}</b> ({{ totalSongs }}) songs
    </p>
    <p>Created by : {{ playlistOwner }}</p>

    <p>Genres : </p>
    <ul>
      <li
        v-for="genre in playlistGenres"
        :key="genre"
      >
        {{ genre }}
      </li>
    </ul>

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
    }),
  }
};
</script>
