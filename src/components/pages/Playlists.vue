<template>
  <div class="wrapper grid-page">
    <div class="header-area">
      <Header :back-btn="homeRoute">
        <template #title>
          <p class="banner-title">
            {{ $t.playlistsTitle }}
          </p>
        </template>
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
import { mapState } from 'vuex';
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
    ...mapState({
      playlists: (state) => state.playlist.playlists,
      nextPlaylists: (state) => state.playlist.nextPlaylists,
      previousPlaylists: (state) => state.playlist.previousPlaylists
    })
  },
  created() {
    this.getPlaylists();
  },
  methods: {
    ...mapActions({
      getPlaylists: 'playlist/getPlaylists'
    })
  }
};
</script>
