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
    <h1>Game board</h1>
    <mj-modal>
      <button slot="trigger">Invite</button>
      <div class="inviteYourFriend">
        <h2>Invite your friend</h2>
        <p>Anyone with the link can <b>view</b> and <b>edit</b> the game.</p>
        <mj-copy-text :text="gameLink" />
      </div>
    </mj-modal>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '../layouts/DefaultLayout.vue';

export default {
  components: {
    DefaultLayout,
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
</style>
