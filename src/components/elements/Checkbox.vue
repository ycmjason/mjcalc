<template functional>
  <label>
    <input type="checkbox"
           v-on="listeners"
           v-bind="data.attrs">
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

input:focus {
  & ~ * {
    outline: auto 2px Highlight;
    outline: auto 5px -webkit-focus-ring-color;
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
