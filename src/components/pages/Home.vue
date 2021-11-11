<template>
  <div class="wrapper homepage-area">
    <div class="header">
      <Header>
        <template #title>
          <p class="banner-title">
            {{ $t.homeTitle }} {{ currentUser.display_name }}
          </p>
        </template>
        <template #button>
          <button
            class="btn btn-round btn-sm btn-ghost-red"
            @click="logOutUser()"
          >
            {{ $t.logOutBtn }}
          </button>
        </template>
      </Header>
    </div>

    <div class="home-area">
      <button
        class="btn btn-round btn-lg btn-ghost-green"
        @click="$router.push({ name: 'playlists' })"
      >
        {{ $t.accessPlaylistsBtn }}
      </button>
      <UserTopTracks
        :top-tracks="currentTopTracks"
      />
      <UserTopArtists
        :top-artists="currentTopArtists"
      />
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import { mapActions } from 'vuex';
import Header from '@/components/common/Header.vue';
import UserTopTracks from '@/components/cards/UserTopTracks.vue';
import UserTopArtists from '@/components/cards/UserTopArtists.vue';

export default {
  name: 'Home',
  components: {
    Header,
    UserTopTracks,
    UserTopArtists
  },
  computed: {
    ...mapFields('user', ['currentUser', 'currentTopArtists', 'currentTopTracks'])
  },
  created() {
    this.getCurrentUser();
    this.getUserTopItems('artists');
    this.getUserTopItems('tracks');
  },
  methods: {
    ...mapActions({
      getCurrentUser: 'user/getCurrentUser',
      getUserTopItems: 'user/getUserTopItems',
      logOutUser: 'auth/logOutUser'
    })
  }
};
</script>

<style lang="scss">
.homepage-area {
  grid-template-areas:
    'head head'
    'main main';
  grid-template-rows: 10vh auto;
}

.home-area {
  grid-area: main;
  margin: auto;
  text-align: center;
}
</style>
