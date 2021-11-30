<template>
  <TopElementsCard
    :items="topFiveArtists"
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
        class="clickable"
        icon="user-alt"
        color="#218f51"
        :title="$t.artistIcon"
      /> {{ item.name }} <br />

      <fa
        class="clickable"
        icon="chart-line"
        color="#309fb1"
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
        class="clickable"
        icon="th-list"
        color="#b45f06"
        :title="$t.genresIcon"
      /> {{ getGenresString(item.genres) }}
    </template>
  </TopElementsCard>
</template>

<script>
import { getGenresString } from '@/plugins/helper';
import TopElementsCard from '@/components/cards/TopElementsCard.vue';

export default {
  name: 'UserTopArtistsCard',
  components: {
    TopElementsCard
  },
  props: {
    topArtists: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    topFiveArtists() {
      return this.topArtists.items ? this.topArtists.items.slice(0, 5) : [];
    }
  },
  methods: {
    getGenresString
  }
};
</script>
