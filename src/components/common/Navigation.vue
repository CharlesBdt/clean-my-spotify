<template>
  <div>
    <button
      v-if="previous"
      @click="$emit('listing', 'previous')"
    >
      Previous
    </button>
    <button
      v-if="next"
      @click="$emit('listing', 'next')"
    >
      Next
    </button>
  </div>
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
  emits: ['listing']
};
</script>
