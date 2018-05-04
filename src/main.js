import Vue from 'vue';
import App from './App.vue';
import store from './store';

const COMPONENT_PREFIX = 'mj';

const registerAll = (context, prefix) => context.keys().forEach(p => {
  let name = p.match(/\.\/(.*?)\.vue/)[1];
  Vue.component(prefix + name, context(p).default);
});

registerAll(require.context('@/components', false, /.*\.vue/), COMPONENT_PREFIX);
registerAll(require.context('@/components_presentational', false, /.*\.vue/), `${COMPONENT_PREFIX}P`);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
