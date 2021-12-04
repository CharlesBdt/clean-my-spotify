<template>
  <div class="inline-block">
    <TopElementsCard
      :items="newFiveAlbums"
      @see-more="seeFullList"
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

    <!-- Modal displayed when clicked on "See more" -->
    <NewAlbumModal
      :items="newAlbums"
      :is-displayed="isDisplayed"
      @close-modal="closeFullList"
    />
  </div>
</template>

<script>
import { getArtistsString } from '@/plugins/helper';
import TopElementsCard from '@/components/cards/TopElementsCard.vue';
import NewAlbumModal from '@/components/modals/NewAlbumModal.vue';


export default {
  name: 'NewReleasesAlbumsCard',
  components: {
    TopElementsCard,
    NewAlbumModal
  },
  props: {
    newAlbums: {
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
    newFiveAlbums() {
      return this.newAlbums.slice(0, 5);
    }
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
