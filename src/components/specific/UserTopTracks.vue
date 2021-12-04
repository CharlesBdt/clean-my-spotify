<template>
  <div class="inline-block">
    <TopElementsCard
      :items="topFiveTracks"
      @see-more="seeFullList"
    >
      <template #title>
        <h3>{{ $t.userTopTracksTitle }}</h3>
      </template>

      <template #image="{ item }">
        <img
          :src="item.album.images[0].url"
          width="50"
          height="50"
        >
      </template>

      <template #text="{ item }">
        <fa
          class="clickable green-color"
          icon="music"
          :title="$t.songIcon"
        /> {{ item.name }} <br />

        <fa
          class="clickable blue-color"
          icon="compact-disc"
          :title="$t.albumIcon"
        /> {{ item.album.name }} ({{ $f.europeanDate(item.album.release_date) }}) <br />

        <fa
          class="clickable brown-color"
          icon="user-alt"
          :title="$t.artistIcon"
        /> {{ getArtistsString(item.artists) }}
      </template>
    </TopElementsCard>

    <!-- Modal displayed when clicked on "See more" -->
    <TopTracksModal
      :items="topTracks.items"
      :is-displayed="isDisplayed"
      @close-modal="closeFullList"
    />
  </div>
</template>

<script>
import { getArtistsString } from '@/plugins/helper';
import TopElementsCard from '@/components/cards/TopElementsCard.vue';
import TopTracksModal from '@/components/modals/TopTracksModal.vue';

export default {
  name: 'UserTopTracksCard',
  components: {
    TopElementsCard,
    TopTracksModal
  },
  props: {
    topTracks: {
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
    topFiveTracks() {
      return this.topTracks.items ? this.topTracks.items.slice(0, 5) : [];
    },
  },
  methods: {
    getArtistsString,
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
