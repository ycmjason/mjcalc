<template>
  <footer>
    <div class="container">
      This is a great footer | Jason Yu &copy; 2018
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../scss/config.scss";

footer {
  margin-top: 1rem;
  padding-top: 4rem;
  padding-bottom: 2rem;
  background: lighten($theme-color-primary, 75%);
  color: $theme-color-primary;
}
</style>
