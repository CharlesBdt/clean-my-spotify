<template>
  <div>
    <h1>HOME PAGE</h1>

    <button @click="$router.push({ path: '/playlists' })">
      Check my playlists
    </button>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>
