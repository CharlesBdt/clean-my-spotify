<template>
  <div>
    <h1>{{ $t.homeTitle }}</h1>

    <button
      class="btn btn-round btn-lg btn-ghost-green"
      @click="$router.push({ name: 'playlists' })"
    >
      {{ $t.accessPlaylistsBtn }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>
