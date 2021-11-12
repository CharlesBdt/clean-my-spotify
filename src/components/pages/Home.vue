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

    <div class="main-area">
      <button
        class="btn btn-round btn-lg btn-ghost-green"
        @click="$router.push({ name: 'playlists' })"
      >
        {{ $t.accessPlaylistsBtn }}
      </button>
    </div>

    <div class="list-area">
      <UserTopTracks
        :top-tracks="currentTopTracks.items.slice(0, 5)"
      />
      <UserTopArtists
        :top-artists="currentTopArtists.items.slice(0, 5)"
      />
      <NewReleasesAlbums
        :new-albums="newAlbums.slice(0, 5)"
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
import NewReleasesAlbums from '@/components/cards/NewReleasesAlbums.vue';

export default {
  name: 'Home',
  components: {
    Header,
    UserTopTracks,
    UserTopArtists,
    NewReleasesAlbums
  },
  computed: {
    ...mapFields('user', ['currentUser', 'currentTopArtists', 'currentTopTracks']),
    ...mapFields('album', ['newAlbums'])
  },
  created() {
    this.getCurrentUser();
    this.getUserTopItems('artists');
    this.getUserTopItems('tracks');
    this.getNewReleases();
  },
  methods: {
    ...mapActions({
      getCurrentUser: 'user/getCurrentUser',
      getUserTopItems: 'user/getUserTopItems',
      getNewReleases: 'album/getNewReleases',
      logOutUser: 'auth/logOutUser'
    })
  }
};
</script>

<style lang="scss">
.homepage-area {
  grid-template-areas:
    'head head head'
    'main main main'
    'list list list';
  grid-template-rows: 10vh auto;
}

.main-area {
  grid-area: main;
  margin: auto;
  text-align: center;
}

.list-area {
  grid-area: list;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
