<template>
  <TopElementsCard
    :items="topFiveArtists"
  >
    <template #image="{ item }">
      <img
        :src="item.images[0].url"
        width="50"
        height="50"
      >
    </template>

    <template #text="{ item }">
      Artist : {{ item.name }}
      FOLLOWERS : {{ item.followers.total }} <br>
      POPULARITY: {{ item.popularity }}<br>
      GENRES: {{ getGenresString(item.genres) }}
    </template>
    <!-- The popularity of a track is a value between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.
    Generally speaking, songs that are being played a lot now will have a higher popularity than songs that were played a lot in the past. Duplicate tracks (e.g. the same track from a single and an album) are rated independently. Artist and album popularity is derived mathematically from track popularity. Note that the popularity value may lag actual popularity by a few days: the value is not updated in real time. -->
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
