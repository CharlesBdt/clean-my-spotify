<template>
  <ItemsListing
    :is-displayed="isDisplayed"
    :items="items"
    @close-modal="closeModal"
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
  </ItemsListing>
</template>

<script>
import { getArtistsString } from '@/plugins/helper';
import ItemsListing from '@/components/common/ItemsListing.vue';

export default {
  name: 'TNewAlbumModal',
  components: {
    ItemsListing
  },
  props: {
    items: {
      type: Object,
      default: () => {}
    },
    isDisplayed: {
      type: Boolean,
      default: false
    },
  },
  emits: ['closeModal'],
  methods: {
    getArtistsString,
    closeModal() {
      this.$emit('closeModal');
    }
  }
};
</script>
