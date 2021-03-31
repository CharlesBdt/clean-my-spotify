<template>
  <h3>Name : {{ playlist.name }}</h3>

  <img
    :src="playlist.images[0].url"
    width="50"
    height="50"
  >

  <div v-if="playlist.description">
    <b>Description :</b> <em>{{ playlist.description }}</em>
  </div>

  <hr>
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
