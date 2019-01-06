import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('./components/pages/Home.vue').default,
    },
    {
      path: '/g/:buzzword',
      name: 'game',
      component: require('./components/pages/Game.vue').default,
      props: true,
    },
  ],
});
