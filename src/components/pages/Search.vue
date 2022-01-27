<template>
  <div class="wrapper grid-page">
    <div class="header-area">
      <Header :back-btn="homeRoute">
        <template #title>
          <p class="banner-title">
            {{ $t.searchTitle }}
          </p>
        </template>
      </Header>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from '@/components/common/Header.vue';

export default {
  name: 'Search',
  components: {
    Header,
  },
  data() {
    return {
      homeRoute: 'home'
    };
  },
  methods: {
    ...mapActions({
    })
  }
};
</script>
