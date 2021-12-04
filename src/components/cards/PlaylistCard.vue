<template>
  <div class="playlist-card hover-green card" @click="openPlaylist">
    <img
      :src="playlist.images[0].url"
      width="200"
      height="200"
    >

    <div class="pa-1">
      <p v-if="playlist.name" class="pb-1">
        <b>
          {{ $f.truncateText(playlist.name, 20) }}
        </b>
      </p>
      <p v-if="!playlist.name" class="pb-1">
        <b>
          {{ $t.noPlaylistName }}
        </b>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaylistCard',
  props: {
    playlist: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    openPlaylist() {
      let routeData = this.$router.resolve({ name: 'playlist', params: { playlistId: this.playlist.id }});
      window.open(routeData.href, '_blank');
    }
  }
};
</script>
