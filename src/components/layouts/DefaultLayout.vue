<template>
  <div>
    <header>
      <div class="container">
        <h1 class="siteName">MJCalc</h1>
      </div>
    </header>
    <main class="container">
      <slot></slot>
    </main>
    <footer>
      <div class="container">
        <p>
          Made with ❤ by Jason Yu
        </p>
        <LocaleChanger v-model="$i18n.locale"/>
      </div>
    </footer>
  </div>
</template>

<script>
import LocaleChanger from '../LocaleChanger.vue';

export default {
  components: { LocaleChanger },
};
</script>

<style lang="scss" scoped>
@import "@/scss/config.scss";

header {
  background: $color-accent;
  color: #FFFFFF;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
}

.siteName {
  margin: 0;
  text-align: center;
  @media screen and (min-width: $breakpoint-sm) {
    text-align: left;
  }
}

footer {
  margin-top: 2rem;
  min-height: 12rem;
  padding-top: 3rem;
  background: $color-secondary;
}
</style>
