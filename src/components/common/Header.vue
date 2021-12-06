<template>
  <div class="mt-5">
    <slot name="home">
      <fa
        class="clickable green-color"
        icon="music"
        size="lg"
        @click="$router.push({ name: homeRoute })"
      />
      <fa
        class="clickable ml-5"
        :icon="['fab', 'github']"
        size="lg"
        :title="$t.githubRepo"
        @click="githubRepo"
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
      homeRoute: 'home',
      repoLink: 'https://github.com/CharlesCharly/spotify-adventure'
    };
  },
  methods: {
    githubRepo() {
      window.open(this.repoLink, '_blank');
    }
  }
};
</script>
