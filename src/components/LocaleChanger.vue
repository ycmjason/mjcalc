<template>
  <section>
    <button
      v-for="(langDisplay, langCode) in langs"
      :key="langCode"
      @click="$emit('change', langCode)">
      {{ langDisplay }}
    </button>
  </section>
</template>

<script>
export default {
  name: 'locale-changer',
  model: {
    prop: 'current',
    event: 'change',
  },
  data: () => ({
    langs: {
      'ch': '中文',
      'en': 'English',
    },
  }),
};
</script>
