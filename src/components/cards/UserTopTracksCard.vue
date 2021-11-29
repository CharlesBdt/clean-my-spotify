<template>
  <div class="top-list-card">
    <div v-for="track in topFiveTracks" :key="track.id">
      <div class="grid-picture-text">
        <div class="picture-area">
          <img
            :src="track.album.images[0].url"
            width="50"
            height="50"
          >
        </div>
        <div class="text-area">
          SONG: {{ track.name }} <br />
          ALBUM: {{ track.album.name }}<br />
          ALBUM RELEASE : {{ track.album.release_date }}<br />
          ARTIST: {{ getArtistsString(track.artists) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArtistsString } from '@/plugins/helper';

export default {
  name: 'UserTopTracksCard',
  props: {
    topTracks: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    topFiveTracks() {
      return this.topTracks.items ? this.topTracks.items.slice(0, 5) : [];
    },
  },
  methods: {
    getArtistsString
  }
};
</script>

<style lang="scss">

</style>
