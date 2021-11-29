<template>
  <div class="top-list-card">
    <div v-for="album in newFiveAlbums" :key="album.id">
      <div class="grid-picture-text">
        <div class="picture-area">
          <img
            :src="album.images[0].url"
            width="50"
            height="50"
          >
        </div>
        <div class="text-are">
          ALBUM: {{ album.name }} <br>
          ALBUM RELEASE : {{ album.release_date }} <br>
          ARTIST: {{ getArtistsString(album.artists) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArtistsString } from '@/plugins/helper';

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
  },
  methods: {
    getArtistsString
  }
};
</script>
