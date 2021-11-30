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
        class="mb-5"
        :top-tracks="currentTopTracks"
      />
      <UserTopArtistsCard
        class="ml-5 mr-5 mb-5"
        :top-artists="currentTopArtists"
      />
      <NewReleasesAlbumsCard
        class="mb-5"
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
