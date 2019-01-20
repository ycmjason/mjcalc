<template>
  <form @submit.prevent="onSubmit">
    <input class="buzzwordInput"
           :class="invalidClass"
           placeholder="Game Buzzword"
           pattern="^[A-Za-z0-9]+$"
           @keydown="onKeydown"
           v-model="buzzword" >
    <input class="startButton" type="submit" value="Start">
    <p class="patternHint" :class="invalidClass">
      Hint: You can only use a combination of capital letters and numbers.
    </p>
  </form>
</template>

<script>
import gameService from '@/services/gameService';

export default {
  created () {
    gameService.getFreeBuzzword().then(buzzword => {
      if (this.buzzword !== '') return;
      this.buzzword = buzzword;
    });
  },

  data: () => ({
    buzzword: '',
    isPristine: true,
  }),

  watch: {
    buzzword () {
      this.isPristine = false;
    },
  },

  computed: {
    upperBuzzword () {
      return this.buzzword.toUpperCase();
    },

    isValid () {
      return /^[A-Z0-9]+$/.test(this.upperBuzzword);
    },

    invalidClass () {
      return {
        invalid: !this.isPristine && !this.isValid,
      };
    },
  },

  methods: {
    onSubmit () {
      const { upperBuzzword, isValid } = this;

      if (isValid) {
        this.$emit('submit', upperBuzzword);
      }
    },
    onKeydown ($event) {
      if (!/[A-Za-z0-9]/.test($event.key)) {
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

  &.invalid {
    border-color: $color-danger;
  }
}

.startButton {
  flex-grow: 1;
  flex-shrink: 0;
}

.errorMessage {
  flex-basis: 100%;
}

.patternHint {
  display: none;

  &.invalid {
    display: block;
    color: $color-danger;
  }
}
</style>
