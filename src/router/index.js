import Vue from 'vue';
import Router from 'vue-router';
import eventspage from '../components/events/eventspage';
import eventroutes from '../components/events/eventroutes';
import homepage from '../components/home/homepage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'foo',
      component: homepage,
    },
    {
      path: '/events',
      name: 'eventlist',
      component: eventspage,
      children: eventroutes,
    },
    {
      // Redirects all other paths to the homepage
      path: '*',
      redirect: '/',
    },
  ],
});
