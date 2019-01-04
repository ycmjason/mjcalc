<template>
  <form @submit="onSubmit">
    <input
      class="buzzwordInput"
      type="text"
      placeholder="Game Buzzword"
      v-model="buzzword">
    <input class="startButton" type="submit" value="Start">
  </form>
</template>

<script>
export default {
  data: () => ({
    buzzword: '',
  }),
  methods: {
    onSubmit () {
      this.$emit('submit', this.buzzword.toUppercase());
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/config.scss';

form {
  display: flex;
  flex-wrap: wrap;
}

.buzzwordInput {
  text-transform: uppercase;
  flex-basis: 100%;
  flex-shrink: 0;

  @media screen and (min-width: $breakpoint-sm) {
    flex-basis: 0;
    flex-grow: 10;
  }
}

.startButton {
  flex-grow: 1;
  flex-shrink: 0;
}
</style>
