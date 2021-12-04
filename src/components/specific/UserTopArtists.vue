<template>
  <div class="inline-block">
    <TopElementsCard
      :items="topFiveArtists"
      @see-more="seeFullList"
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
    </TopElementsCard>

    <!-- Modal displayed when clicked on "See more" -->
    <TopArtistsModal
      :items="topArtists.items"
      :is-displayed="isDisplayed"
      @close-modal="closeFullList"
    />
  </div>
</template>

<script>
import { getGenresString } from '@/plugins/helper';
import TopElementsCard from '@/components/cards/TopElementsCard.vue';
import TopArtistsModal from '@/components/modals/TopArtistsModal.vue';

export default {
  name: 'UserTopArtistsCard',
  components: {
    TopElementsCard,
    TopArtistsModal
  },
  props: {
    topArtists: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      isDisplayed: false
    };
  },
  computed: {
    topFiveArtists() {
      return this.topArtists.items ? this.topArtists.items.slice(0, 5) : [];
    }
  },
  methods: {
    getGenresString,
    seeFullList() {
      this.isDisplayed = !this.isDisplayed;
      document.body.classList.add('modal-open');
    },
    closeFullList() {
      this.isDisplayed = !this.isDisplayed;
      document.body.classList.remove('modal-open');
    }
  }
};
</script>
