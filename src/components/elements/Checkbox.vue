<template>
  <label>
    <input type="checkbox"
           v-on="$listeners"
           v-bind="$attrs">
    <mj-icon class="unchecked">check_box_outline_blank</mj-icon>
    <mj-icon class="checked">check_box</mj-icon>
  </label>
</template>

<style lang="scss" scoped>
label {
  display: inline-block;
}

input {
  opacity: 0;
  position: absolute;
  z-index: -1;
}

input:checked {
  & ~ .checked {
    display: inline-block;
  }

  & ~ .unchecked {
    display: none;
  }
}

input:not(:checked) {
  & ~ .checked {
    display: none;
  }

  & ~ .unchecked {
    display: inline-block;
  }
}
</style>
