import Vue from 'vue';
import Router from 'vue-router';
import navbar from '@/components/navbar';
import eventlist from '../components/eventlist';
import homepage from '../components/pages/homepage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'foo',
      components: {
        default: homepage,
        navbar,
      },
    },
    {
      path: '/events',
      name: 'eventlist',
      component: {
        default: eventlist,
        navbar,
      },
    },
    {
      //Redirects all other paths to the homepage
      path: '*',
      redirect: '/',
    },
  ],
});
