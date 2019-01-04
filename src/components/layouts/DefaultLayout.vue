<template>
  <div>
    <header>
      <div class="container">
        <h1>MJCalc</h1>
      </div>
    </header>
    <main class="container">
      <slot></slot>
    </main>
    <footer>
      <div class="container">
        Made with ❤ by Jason Yu
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/config.scss";

header {
  background: $color-accent;
  color: #FFFFFF;
  padding: 0.5rem 0;
  margin-bottom: 1rem;

  h1 {
    margin: 0;
  }
}

footer {
  margin-top: 2rem;
  min-height: 12rem;
  padding-top: 3rem;
  background: $color-secondary;
}
</style>
