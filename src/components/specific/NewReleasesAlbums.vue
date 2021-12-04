<template>
  <TopElementsCard
    :items="newFiveAlbums"
  >
    <template #title>
      <h3>{{ $t.newReleasesAlbumTitle }}</h3>
    </template>

    <template #image="{ item }">
      <img
        :src="item.images[0].url"
        width="50"
        height="50"
      >
    </template>

    <template #text="{ item }">
      <fa
        class="clickable green-color"
        icon="compact-disc"
        :title="$t.albumIcon"
      /> {{ item.name }} <br />

      <fa
        class="clickable blue-color"
        icon="calendar-alt"
        :title="$t.releaseDateIcon"
      /> {{ $f.europeanDate(item.release_date) }}<br />

      <fa
        class="clickable brown-color"
        icon="user-alt"
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
