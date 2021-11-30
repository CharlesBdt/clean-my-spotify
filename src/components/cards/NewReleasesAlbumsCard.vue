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
      <fa
        class="clickable"
        icon="compact-disc"
        color="#218f51"
        :title="$t.albumIcon"
      /> {{ item.name }} <br />
      <fa
        class="clickable"
        icon="calendar-alt"
        color="#309fb1"
        :title="$t.releaseDateIcon"
      /> {{ $f.europeanDate(item.release_date) }}<br />
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
