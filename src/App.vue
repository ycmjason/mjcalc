<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
@import "./scss/resets.scss";
@import "./scss/theme.scss";

.container {
  max-width: 1180px;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}
</style>
