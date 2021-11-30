<template>
  <TopElementsCard
    :items="newFiveAlbums"
  >
    <template #image="{ item }">
      <img
        :src="item.images[0].url"
        width="50"
        height="50"
      >
    </template>

    <template #text="{ item }">
      ALBUM: {{ item.name }} <br>
      ALBUM RELEASE : {{ item.release_date }} <br>
      ARTIST: {{ getArtistsString(item.artists) }}
    </template>
  </TopElementsCard>
</template>

<script>
import { getArtistsString } from '@/plugins/helper';
import TopElementsCard from '@/components/cards/TopElementsCard.vue';

export default {
  name: 'NewReleasesAlbumsCard',
  components: {
    TopElementsCard
  },
  props: {
    newAlbums: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    newFiveAlbums() {
      return this.newAlbums.slice(0, 5);
    }
  },
  methods: {
    getArtistsString
  }
};
</script>
