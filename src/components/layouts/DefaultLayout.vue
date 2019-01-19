<i18n>
{
  "en": {
    "siteName": "MJCalc",
    "footer": {
      "madeBy":  "Made with ❤ by Jason Yu"
    }
  },
  "ch": {
    "siteName": "麻雀計分器",
    "footer": {
      "madeBy":  "Jason Yu 用 ❤ 練成的"
    }
  }
}
</i18n>

<template>
  <div>
    <header>
      <div class="container">
        <router-link
            tag="h1"
            to="/"
            class="siteName">
          {{ $t('siteName') }}
        </router-link>
      </div>
    </header>
    <main class="container">
      <slot></slot>
    </main>
    <footer>
      <div class="container">
        <p>{{ $t('footer.madeBy') }}</p>
        <LocaleChanger />
        <iframe class="fbPagePlugin" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMJCalc-2138719219522362%2F&tabs=timeline&width=340&height=222&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=205279280400123" width="340" height="222" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
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
  cursor: pointer;
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
	padding-bottom: 3rem;
  background: $color-secondary;
  text-align: center;

  @media screen and (min-width: $breakpoint-sm) {
    text-align: left;
  }

  .fbPagePlugin {
    margin-top: 1rem;
    max-width: 100%;
  }
}
</style>
