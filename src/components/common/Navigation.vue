<template>
  <button
    v-if="previous"
    @click="$emit('playlistsListing', 'previous')"
  >
    Previous
  </button>
  <button
    v-if="next"
    @click="$emit('playlistsListing', 'next')"
  >
    Next
  </button>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    previous: {
      type: String,
      default: null
    },
    next: {
      type: String,
      default: null
    }
  },
  emits: ['playlistsListing']
};
</script>
