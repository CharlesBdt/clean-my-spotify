<template>
  <div class="wrapper homepage-area">
    <div class="banner">
      <p class="banner-title">
        {{ $t.bannerTitle }}
      </p>
    </div>
    <div class="login-box">
      <p class="text-md pb-5">
        {{ $t.loginText }}
      </p>
      <button class="btn btn-round btn-lg btn-ghost-green" @click="logInUser()">
        <fa icon="skiing" size="lg" />
        <b class="pl-2">
          {{ $t.signInBtn }}
        </b>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  methods: {
    ...mapActions({
      logInUser: 'auth/logInUser'
    })
  }
};
</script>

<style lang="scss">
.homepage-area {
  grid-template-areas:
    'head head'
    'main main';
  grid-template-rows: 10vh auto;
}

.banner {
  grid-area: head;
  margin: auto;
  text-align: center;
}

.login-box {
  grid-area: main;
  margin: auto;
  text-align: center;
}
</style>
