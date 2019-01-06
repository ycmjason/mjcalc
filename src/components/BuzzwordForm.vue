<template>
  <form @submit.prevent="onSubmit">
    <mj-text-input
      class="buzzwordInput"
      placeholder="Game Buzzword"
      text-transform="uppercase"
      :is-invalid-key="c => /^[^a-zA-Z]$/.test(c)"
      :valid-pattern="/^[A-Z]+$/"
      v-model="buzzword" />
    <input class="startButton" type="submit" value="Start">
  </form>
</template>

<script>

export default {
  data: () => ({
    buzzword: '',
    isPristine: true,
  }),

  methods: {
    onSubmit () {
      const { buzzword } = this;

      this.isPristine = false;
      if (buzzword.length > 0) {
        this.$emit('submit', buzzword);
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

.errorMessage {
  flex-basis: 100%;
}
</style>
