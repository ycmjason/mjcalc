<i18n>
{
  "en": {
    "welcome": {
      "title": "Welcome!",
      "message": "Welcome to MJCalc! This is the best Mahjong Score Calculator you will find because I built this. Go on and try it out!"
    },
    "joinGameForm": {
      "title": "Join or Create Game"
    },
    "social": {
      "title": "Like us on Facebook!"
    }
  },
  "ch": {
    "welcome": {
      "title": "歡迎!",
      "message": "歡迎來到麻雀計分器!"
    },
    "joinGameForm": {
      "title": "加入或創建牌局"
    },
    "social": {
      "title": "在面書上讚好!"
    }
  }
}
</i18n>

<template>
  <DefaultLayout>
    <main>
      <section class="welcome">
        <h2>{{ $t('welcome.title') }}</h2>
        <p>{{ $t('welcome.message') }}</p>
      </section>
      <section class="joinGameForm">
        <h2>{{ $t('joinGameForm.title') }}</h2>
        <BuzzwordForm @submit="buzzword => start(buzzword)"></BuzzwordForm>
      </section>
    </main>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import BuzzwordForm from '../BuzzwordForm.vue';

export default {
  components: {
    DefaultLayout,
    BuzzwordForm,
  },

  methods: {
    async start (buzzword) {
      await this.$store.dispatch('game/start', buzzword);
      this.$router.push({
        name: 'game',
        params: { buzzword },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/config.scss';

main {
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: $breakpoint-md) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }
}
</style>
