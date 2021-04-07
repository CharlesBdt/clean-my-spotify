<template>
  <div>
    <button
      @click="
        $router.push({ name: 'playlist', params: { playlistId: playlist.id } })
      "
    >
      Detail
    </button>

    <p>
      <b>Name : {{ playlist.name }}</b> ({{ playlist.tracks.total }}) songs
    </p>

    <img
      :src="playlist.images[0].url"
      width="50"
      height="50"
    >

    <div v-if="playlist.description">
      <b>Description :</b> <em>{{ playlist.description }}</em>
    </div>

    <hr>
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
