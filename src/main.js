import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const COMPONENT_PREFIX = 'mj';

const registerAll = (context, prefix) => context.keys().forEach(p => {
  let name = p.match(/\.\/(.*?)\.vue/)[1];
  Vue.component(prefix + name, context(p).default);
});

registerAll(require.context('@/components', false, /.*\.vue/), COMPONENT_PREFIX);
registerAll(require.context('@/components_layout', false, /.*\.vue/), COMPONENT_PREFIX + 'Layout');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
