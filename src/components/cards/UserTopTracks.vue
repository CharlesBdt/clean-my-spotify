<template>
  <div v-for="track in topTracks.items" :key="track.id">
    <img
      :src="track.album.images[0].url"
      width="50"
      height="50"
    >
    ALBUM: {{ track.album.name }} <br>
    ALBUM RELEASE : {{ track.album.release_date }} <br>
    SONG: {{ track.name }}<br>
    ARTIST:
    <div v-for="artist in track.artists" :key="artist.id">
      {{ artist.name }}
    </div>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: 'UserTopTracks',
  props: {
    topTracks: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
