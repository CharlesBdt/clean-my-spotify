<template>
  <div>
    <h1>
      PLAYLISTS
    </h1>

    <PlaylistOverviewCard
      v-for="playlist in playlists"
      :key="playlist.id"
      :playlist="playlist"
    />

    <Navigation
      :previous="previousPlaylists"
      :next="nextPlaylists"
      @listing="getPlaylists"
    />
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import { mapActions } from 'vuex';
import PlaylistOverviewCard from '@/components/cards/PlaylistOverviewCard.vue';
import Navigation from '@/components/common/Navigation.vue';

export default {
  name: 'Playlists',
  components: {
    PlaylistOverviewCard,
    Navigation
  },
  computed: {
    ...mapFields('spotify', ['playlists', 'nextPlaylists', 'previousPlaylists'])
  },
  created() {
    this.getPlaylists();
  },
  methods: {
    ...mapActions({
      getPlaylists: 'spotify/getPlaylists'
    })
  }
};
</script>
