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
        class="btn btn-round btn-lg btn-ghost-green mb-5"
        @click="$router.push({ name: 'playlists' })"
      >
        {{ $t.accessPlaylistsBtn }}
      </button>
    </div>

    <div class="list-area">
      <UserTopTracks
        class="ml-3 mr-3 mb-5"
        :top-tracks="currentTopTracks"
      />
      <UserTopArtists
        class="ml-3 mr-3 mb-5"
        :top-artists="currentTopArtists"
      />
      <NewReleasesAlbums
        class="ml-3 mr-3 mb-5"
        :new-albums="newAlbums"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapActions } from 'vuex';
import Header from '@/components/common/Header.vue';
import UserTopTracks from '@/components/common/UserTopTracks.vue';
import UserTopArtists from '@/components/common/UserTopArtists.vue';
import NewReleasesAlbums from '@/components/common/NewReleasesAlbums.vue';

export default {
  name: 'Home',
  components: {
    Header,
    UserTopTracks,
    UserTopArtists,
    NewReleasesAlbums
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
