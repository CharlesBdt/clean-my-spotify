<template>
  <div class="wrapper grid-homepage">
    <div class="header-area">
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
      <UserTopTracksCard
        :top-tracks="currentTopTracks"
      />
      <UserTopArtistsCard
        :top-artists="currentTopArtists"
      />
      <NewReleasesAlbumsCard
        :new-albums="newAlbums"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapActions } from 'vuex';
import Header from '@/components/common/Header.vue';
import UserTopTracksCard from '@/components/cards/UserTopTracksCard.vue';
import UserTopArtistsCard from '@/components/cards/UserTopArtistsCard.vue';
import NewReleasesAlbumsCard from '@/components/cards/NewReleasesAlbumsCard.vue';

export default {
  name: 'Home',
  components: {
    Header,
    UserTopTracksCard,
    UserTopArtistsCard,
    NewReleasesAlbumsCard
  },
  computed: {
    ...mapState({
      newAlbums: (state) => state.album.newAlbums,
      currentUser: (state) => state.user.currentUser,
      currentTopTracks: (state) => state.user.currentTopTracks,
      currentTopArtists: (state) => state.user.currentTopArtists
    }),
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
.grid-homepage {
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
  display: inline-block;
  text-align: center;
  grid-auto-flow: column;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
