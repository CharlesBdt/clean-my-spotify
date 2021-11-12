<template>
  <div v-for="track in topTracks" :key="track.id">
    <img
      :src="track.album.images[0].url"
      width="50"
      height="50"
    ><br>
    SONG: {{ track.name }}<br>
    ALBUM: {{ track.album.name }} <br>
    ALBUM RELEASE : {{ track.album.release_date }} <br>
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
