<template>
  <div v-for="album in newFiveAlbums" :key="album.id">
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
  name: 'NewReleasesAlbumsCard',
  props: {
    newAlbums: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    newFiveAlbums() {
      return this.newAlbums.slice(0, 5);
    }
  }
};
</script>
