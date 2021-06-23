<template>
  <div class="playlist-card" @click="
    $router.push({ name: 'playlist', params: { playlistId: playlist.id } })
  "
  >
    <img
      :src="playlist.images[0].url"
      width="200"
      height="200"
    >

    <div class="pa-1" style="text-align: center;">
      <p class="pb-1">
        <b>{{ $f.truncateText(playlist.name, 20) }}</b>
      </p>
      <p>{{ playlist.tracks.total }} {{ $t.songs }}</p>
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
  }
};
</script>
