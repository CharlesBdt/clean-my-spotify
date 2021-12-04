<template>
  <ItemsListing
    :is-displayed="isDisplayed"
    :items="items"
    @close-modal="closeModal"
  >
    <template #title>
      <h3>{{ $t.userTopArtistsTitle }}</h3>
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
        icon="user-alt"
        :title="$t.artistIcon"
      /> {{ item.name }} <br />

      <fa
        class="clickable blue-color"
        icon="chart-line"
        :title="$t.followersIcon"
      /> {{ $f.numberSpacer(item.followers.total) }} {{ $t.followersText }}
      <span class="tooltip">({{ $t.popularityText }} {{ item.popularity }})
        <span class="tooltiptext">
          The popularity of a track is a value between 0 and 100, with 100 being the most popular.<br />
          The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.<br />
          Artist and album popularity is derived mathematically from track popularity.
        </span>
      </span><br />

      <fa
        class="clickable brown-color"
        icon="th-list"
        :title="$t.genresIcon"
      /> {{ getGenresString(item.genres) }}
    </template>
  </ItemsListing>
</template>

<script>
import { getGenresString } from '@/plugins/helper';
import ItemsListing from '@/components/common/ItemsListing.vue';

export default {
  name: 'TopArtistsModal',
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
    getGenresString,
    closeModal() {
      this.$emit('closeModal');
    }
  }
};
</script>
