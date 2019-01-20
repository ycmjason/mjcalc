<template>
  <section>
    <button
      v-for="(langDisplay, langCode) in langs"
      :key="langCode"
      @click="changeLocale(langCode)"
      :disabled="$i18n.locale === langCode">
      {{ langDisplay }}
    </button>
  </section>
</template>

<script>
import i18n from '@/i18n';

export default {
  name: 'locale-changer',
  data: () => ({
    langs: {
      'ch': '中文',
      'en': 'English',
    },
  }),
  methods: {
    changeLocale (langCode) {
      i18n.locale = langCode;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/config.scss';

button:not(:first-child){
  margin-top: 0.5rem;

  @media screen and (min-width: $breakpoint-sm) {
    margin-left: 0.5rem;
    margin-top: 0;
  }
}
</style>
