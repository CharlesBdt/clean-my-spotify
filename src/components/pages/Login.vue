<template>
  <div class="wrapper grid-login">
    <div class="banner-area">
      <p class="banner-title">
        {{ $t.bannerTitle }}
      </p>
    </div>
    <div class="main-area">
      <p class="text-20 pb-5">
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
