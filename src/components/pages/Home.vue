<template>
  <DefaultLayout>
    <section class="joinGameForm">
      <h2>Join or Create Game</h2>
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
