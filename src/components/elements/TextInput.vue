<template>
  <input
    :class="{ error: hasError }"
    :style="{ textTransform }"
    type="text"
    v-model="$data._value"
    @keydown="onKeydown"
    v-bind="$attrs"
    v-on="Object.assign({},
      $listeners,
      { input: event => $emit('input', event.target.value) },
    )">
</template>

<script>
const toCapitalized = s => s.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');

export default {
  props: {
    value: String,
    isInvalidKey: {
      type: Function,
      default: () => () => false,
    },
    validPattern: {
      type: RegExp,
      default: /.*/,
    },
    textTransform: {
      type: String, // none/uppercase/lowercase/capitalize
      default: 'none',
    },
  },

  data: () => ({
    _value: '',
    isPristine: true,
  }),

  computed: {
    textTransformFn: ({ textTransform }) => {
      switch (textTransform) {
        case 'uppercase': return s => s.toUpperCase();
        case 'lowercase': return s => s.toLowerCase();
        case 'capitalize': return toCapitalized;
      }

      return s => s;
    },

    hasError: ({ isPristine, value, validPattern }) => {
      return !isPristine
        && value.length <= 0
        && !validPattern.test(value);
    },
  },

  watch: {
    value: {
      immediate: true,
      handler (v) {
        this.$data._value = v;
      },
    },
    '$data._value': function (v) {
      this.isPristine = false;
      const transformed = this.textTransformFn(v);
      if (transformed === v) return;
      this.$emit('input', transformed);
      this.$data._value = transformed;
    },
  },

  methods: {
    onInput ($event) {
      console.log($event);
    },
    onKeydown ($event) {
      if (this.isInvalidKey($event.key)) {
        $event.preventDefault();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/config.scss';

input {
  text-transform: uppercase;
  flex-basis: 100%;
  flex-shrink: 0;

  @media screen and (min-width: $breakpoint-sm) {
    flex-basis: 0;
    flex-grow: 10;
  }

  &.error {
    border-color: $color-danger;
  }
}
</style>
