<template>
  <div>
    <h1>{{ $t.homeTitle }}</h1>

    <button @click="$router.push({ name: 'playlists' })">
      {{ $t.accessPlaylistBtrn }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>
