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
//harald stuff
import localGroups from '../components/pages/localgroups.vue';
import estiemers from '../components/home/homepage.vue';
import getActive from '../components/home/homepage.vue';
import profilePage from '../components/profile/profile-page.vue';

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
<<<<<<< HEAD
      name: 'eventspage',
=======
      name: 'eventlist',
>>>>>>> 032f1425fe5f0a667ee1b1a98b2b9ff81eb8c25e
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
      path: '/localgroups',
      name: 'localgroups',
      component: localGroups,
    },
    {
      path: '/profile',
      name: 'profile',
      component: profilePage,
    },
    {
      // Redirects all other paths to the homepage
      path: '*',
      redirect: '/',
    },
  ],
});
