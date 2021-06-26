<template>
  <div class="mt-5">
    <fa
      class="clickable"
      icon="music"
      size="lg"
      color="#218f51"
      @click="$router.push({ name: homeRoute })"
    />
  </div>
  <div>
    <slot />
  </div>
  <div class="mt-5">
    <button
      class="btn btn-round btn-sm btn-ghost-green"
      @click="$router.push({ name: backBtn })"
    >
      {{ $t.backBtn }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    backBtn: {
      type: String,
      default: 'home'
    }
  },
  data() {
    return {
      homeRoute: 'home'
    };
  }
};
</script>
