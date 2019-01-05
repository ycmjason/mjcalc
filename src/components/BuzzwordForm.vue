<template>
  <form @submit="onSubmit">
    <input
      class="buzzwordInput"
      type="text"
      placeholder="Game Buzzword"
      v-model="buzzword"
      @keydown="onKeydown">
    <input class="startButton" type="submit" value="Start">
  </form>
</template>

<script>
const cleanBuzzword = v => v.toUpperCase().replace(/[^A-Z]/g, '');
export default {
  data: () => ({
    buzzword: '',
  }),
  watch: {
    buzzword (v) {
      this.buzzword = cleanBuzzword(v);
    },
  },
  methods: {
    onSubmit () {
      this.$emit('submit', this.buzzword.toUppercase());
    },
    onKeydown ($event) {
      // prevent the flickering input by preventDefault() for non-alphabet characters
      if (/^[^a-zA-Z]$/.test($event.key)) {
        $event.preventDefault();
      }
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
