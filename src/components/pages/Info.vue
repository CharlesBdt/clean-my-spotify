<template>
  <div class="wrapper grid-page">
    <div class="header-area">
      <Header :back-btn="homeRoute">
        <template #title>
          <p class="banner-title">
            {{ $t.infoTitle }}
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
  name: 'Info',
  components: {
    Header,
  },
  data() {
    return {
      homeRoute: 'home'
    };
  },
  async created() {
    await this.getItemInfo(this.$route.params.itemId);
  },
  methods: {
    ...mapActions({
      getItemInfo: 'item/getItemInfo'
    })
  }
};
</script>
