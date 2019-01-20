<template>
  <i class="material-icons"
     :class="size"
     v-on="$listeners"
     v-bind="$attrs">
    <slot />
  </i>
</template>

<script>
export default {
  props: {
    size: {
      required: false,
      default: 'm',
    },
  },
};
</script>

<style scoped>
.material-icons.s { font-size: 18px; }
.material-icons.m { font-size: 24px; }
.material-icons.l { font-size: 36px; }
.material-icons.xl { font-size: 48px; }
</style>
