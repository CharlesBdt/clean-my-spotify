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
      SONG: {{ item.name }} <br />
      ALBUM: {{ item.album.name }}<br />
      ALBUM RELEASE : {{ item.album.release_date }}<br />
      ARTIST: {{ getArtistsString(item.artists) }}
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
