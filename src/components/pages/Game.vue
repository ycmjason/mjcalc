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
  components: {
    DefaultLayout,
  },
};
</script>

<style lang="scss" scoped>
</style>
