import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/g/:buzzword',
      name: 'game',
      component: () => import(/* webpackChunkName: "about" */ '@/components/pages/Game.vue'),
      props: true,
    },
  ],
});
