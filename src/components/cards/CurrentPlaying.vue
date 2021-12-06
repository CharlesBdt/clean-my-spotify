<template>
  <div>
    <div v-if="currentPlaying.currently_playing_type === 'ad'">
      <fa
        class="clickable red-color"
        icon="ad"
        size="lg"
        :title="$t.songIcon"
      /> <em class="red-color">{{ $t.adCurrentPlaying }}</em>
    </div>

    <div v-if="currentPlaying.currently_playing_type !== 'ad' && currentPlaying.item">
      <div class="inline-picture-text pb-3 pt-3 clickable">
        <div class="picture-area circle-image">
          <img
            :src="currentPlaying.item.album.images[0].url"
            width="50"
            height="50"
            class="rotate-element"
            :title="$t.trackCurrentPlaying"
          >
        </div>
        <div class="text-area ml-3">
          <fa
            class="green-color"
            icon="music"
            :title="$t.songIcon"
          /> {{ currentPlaying.item.name }} <br />

          <fa
            class="blue-color"
            icon="compact-disc"
            :title="$t.albumIcon"
          /> {{ currentPlaying.item.album.name }} <br />

          <fa
            class="brown-color"
            icon="user-alt"
            :title="$t.artistIcon"
          /> {{ getArtistsString(currentPlaying.item.artists) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArtistsString } from '@/plugins/helper';
import { mapState } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'CurrentPlaying',
  computed: {
    ...mapState({
      currentPlaying: (state) => state.user.currentPlaying
    })
  },
  watch: {
    'currentPlaying.item': {
      handler() {
        if (this.currentPlaying.currently_playing_type !== 'ad' && this.currentPlaying.item) {
          let timeLeft = this.currentPlaying.item.duration_ms - this.currentPlaying.progress_ms;

          // Trigger the function that get current playing track after timeout
          // Time is calculated from total song duration minus current progress
          setTimeout(() => {
            this.getCurrentPlayingTrack();
          }, timeLeft);
        }
        if (this.currentPlaying.currently_playing_type === 'ad') {
          // If the current track is an ad, trigger the function every 10s
          setTimeout(() => {
            this.getCurrentPlayingTrack();
          }, 10000);
        }
      },
      deep: true,
      immediate: true
    }
  },
  created() {
    this.getCurrentPlayingTrack();
  },
  methods: {
    getArtistsString,
    ...mapActions({
      getCurrentPlayingTrack: 'user/getCurrentPlayingTrack',
    })
  }
};
</script>
