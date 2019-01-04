<i18n>
{
  "en": {
    "welcome": {
      "title": "Welcome!",
      "message": "Welcome to MJCalc! This is the best Mahjong Score Calculator you will find because I built this. Go on and try it out!"
    }
  },
  "ch": {
    "welcome": {
      "title": "歡迎!",
      "message": "Welcome to MJCalc! This is the best Mahjong Score Calculator you will find because I built this. Go on and try it out!"
    }
  }
}
</i18n>

<template>
  <DefaultLayout>
    <section class="welcome">
      <h2>{{ $t('welcome.title') }}</h2>
      <p>{{ $t('welcome.message') }}</p>
    </section>
    <section class="joinGameForm">
      <h3>Join or Create Game</h3>
      <BuzzwordForm @submit="buzzword => start(buzzword)"></BuzzwordForm>
    </section>
  </DefaultLayout>
</template>

<script>
import { mapActions } from 'vuex';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import BuzzwordForm from '../BuzzwordForm.vue';

export default {
  components: {
    DefaultLayout,
    BuzzwordForm,
  },

  methods: mapActions('game', ['start']),
};
</script>

<style lang="scss" scoped>
@import '@/scss/config.scss';

.joinGameForm {
  max-width: $breakpoint-md;
}
</style>
