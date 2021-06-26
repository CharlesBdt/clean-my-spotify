<template>
  <div class="mt-5">
    <slot name="home">
      <fa
        class="clickable"
        icon="music"
        size="lg"
        color="#218f51"
        @click="$router.push({ name: homeRoute })"
      />
    </slot>
  </div>
  <div class="mt-3">
    <slot name="title" />
  </div>
  <div class="mt-5">
    <slot name="button">
      <button
        class="btn btn-round btn-sm btn-ghost-green"
        @click="$router.push({ name: backBtn })"
      >
        {{ $t.backBtn }}
      </button>
    </slot>
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
