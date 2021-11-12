<template>
  <div v-for="album in newAlbums" :key="album.id">
    <img
      :src="album.images[0].url"
      width="50"
      height="50"
    ><br>
    ALBUM: {{ album.name }} <br>
    ALBUM RELEASE : {{ album.release_date }} <br>
    ARTIST:
    <div v-for="artist in album.artists" :key="artist.id">
      {{ artist.name }}
    </div>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: 'NewReleasesAlbums',
  props: {
    newAlbums: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
