<template>
  <div class="wrapper head-main-footer-area">
    <div class="header">
      <Header :back-btn="homeRoute">
        <p class="banner-title">
          {{ $t.playlistsTitle }}
        </p>
      </Header>
    </div>

    <div class="playlist-cards-area">
      <PlaylistCard
        v-for="playlist in playlists"
        :key="playlist.id"
        :playlist="playlist"
      />
    </div>

    <div class="footer-area">
      <Navigation
        :previous="previousPlaylists"
        :next="nextPlaylists"
        @listing="getPlaylists"
      />
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import { mapActions } from 'vuex';
import PlaylistCard from '@/components/cards/PlaylistCard.vue';
import Header from '@/components/common/Header.vue';
import Navigation from '@/components/common/Navigation.vue';

export default {
  name: 'Playlists',
  components: {
    PlaylistCard,
    Header,
    Navigation
  },
  data() {
    return {
      homeRoute: 'home'
    };
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

<style lang="scss">
.playlist-cards-area {
  display: grid;
  grid-area: main;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 280px;
}
</style>
