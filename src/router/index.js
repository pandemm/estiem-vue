import Vue from 'vue';
import Router from 'vue-router';
import eventspage from '../components/events/eventspage.vue';
import eventlist from '../components/events/eventlist.vue';
import eventroutes from '../components/events/eventroutes.js';
import homepage from '../components/home/homepage.vue';
// Forum
import forumpage from '../components/forum/forum-page.vue';
import forumroutes from '../components/forum/forum-routes.js';
import forumNewTopic from '../components/forum/forum-new-topic.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/internal/',
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
      path: '/forum',
      name: 'forumpage',
      component: forumpage,
      children: forumroutes,
    },
  {
    path: '/forum/newtopic',
    name: 'newtopic',
    component: forumNewTopic,
  },
    {
      // Redirects all other paths to the homepage
      path: '*',
      redirect: '/',
    },
  ],
});
