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
    Hello {{ buzzword }}!
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '../layouts/DefaultLayout.vue';

export default {
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

  components: {
    DefaultLayout,
  },
};
</script>

<style lang="scss" scoped>
</style>
