<i18n>
{
  "en": {
  },
  "ch": {
  }
}
</i18n>

<template>
  <DefaultLayout>
    <h1>Game Board</h1>
    <section>
      <InviteModal :gameLink="gameLink" />
    </section>
    <section>
      <PlayersPanel />
    </section>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import InviteModal from './Game/InviteModal.vue';
import PlayersPanel from './Game/PlayersPanel.vue';

export default {
  components: {
    DefaultLayout,
    InviteModal,
    PlayersPanel,
  },

  props: ['buzzword'],

  watch: {
    buzzword: {
      immediate: true,
      async handler () {
        const { buzzword } = this;
        await this.$store.dispatch('game/start', buzzword);
      },
    },
  },

  computed: {
    gameLink () {
      const { protocol, host } = window.location;
      return `${protocol}//${host}/g/${this.buzzword}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.inviteYourFriend {
  h2 {
    margin-top: 0;
  }
}

section {
  margin-bottom: 1.6rem;
}
</style>
