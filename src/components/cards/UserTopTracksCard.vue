<template>
  <TopElementsCard
    :items="topFiveTracks"
  >
    <template #image="{ item }">
      <img
        :src="item.album.images[0].url"
        width="50"
        height="50"
      >
    </template>

    <template #text="{ item }">
      <fa
        class="clickable"
        icon="music"
        color="#218f51"
        :title="$t.songIcon"
      /> {{ item.name }} <br />
      <fa
        class="clickable"
        icon="compact-disc"
        color="#309fb1"
        :title="$t.albumIcon"
      /> {{ item.album.name }} ({{ $f.europeanDate(item.album.release_date) }}) <br />
      <fa
        class="clickable"
        icon="user-alt"
        color="#b45f06"
        :title="$t.artistIcon"
      /> {{ getArtistsString(item.artists) }}
    </template>
  </TopElementsCard>
</template>

<script>
import { getArtistsString } from '@/plugins/helper';
import TopElementsCard from '@/components/cards/TopElementsCard.vue';

export default {
  name: 'UserTopTracksCard',
  components: {
    TopElementsCard
  },
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
