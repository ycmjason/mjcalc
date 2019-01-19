<template>
  <input
    class="buzzwordInput"
    :class="{ 'error': !isPristine && buzzword.length === 0 }"
    type="text"
    placeholder="Game Buzzword"
    v-model="buzzword"
    @keydown="onKeydown">
</template>

<script>
export default {
  props: {
    restrictedInput: RegExp,
    canEmpty: {
      type: Boolean,
    },
  },
  data: () => ({
    isPristine: true,
  }),
};
</script>

<style>

</style>