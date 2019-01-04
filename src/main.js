import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

const COMPONENT_PREFIX = 'mj';

const registerAll = ({ context, prefix }) => context.keys().forEach(p => {
  let name = p.match(/\.\/(.*?)\.vue/)[1];
  Vue.component(prefix + name, context(p).default);
});

registerAll({
  context: require.context('@/components/elements', false, /.*\.vue/),
  prefix: COMPONENT_PREFIX,
});

Vue.config.productionTip = process.env.NODE_ENV !== 'production';

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
