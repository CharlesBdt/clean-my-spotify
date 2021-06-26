<template>
  <div class="mb-5">
    <button
      v-if="previous"
      class="btn btn-round btn-sm btn-ghost-green mr-2"
      @click="$emit('listing', 'previous')"
    >
      {{ $t.previousBtn }}
    </button>
    <button
      v-if="next"
      class="btn btn-round btn-sm btn-ghost-green ml-2"
      @click="$emit('listing', 'next')"
    >
      {{ $t.nextBtn }}
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
