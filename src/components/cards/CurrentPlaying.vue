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

    <div v-if="currentPlaying.item && currentPlaying.currently_playing_type !== 'ad'">
      <div class="inline-picture-text pb-3 pt-3 clickable">
        <div class="picture-area">
          <img
            :src="currentPlaying.item.album.images[0].url"
            width="50"
            height="50"
            class="circle-image"
            :title="ici"
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
