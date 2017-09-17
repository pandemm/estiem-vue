import Vue from 'vue';
import Router from 'vue-router';
import eventspage from '../components/events/eventspage.vue';
import eventlist from '../components/events/eventlist.vue';
import eventroutes from '../components/events/eventroutes.js';
import aboutPage from '../components/home/about-page.vue';
import homePage from '../components/home/home-page.vue';
// Forum
import forumpage from '../components/forum/forum-page.vue';
import forumroutes from '../components/forum/forum-routes.js';
import forumNewTopic from '../components/forum/forum-new-topic.vue';
//harald stuff
import localGroups from '../components/pages/localgroups.vue';
import profilePage from '../components/profile/profile-page.vue';
import loginPage from '../components/profile/login-page.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'foo',
      component: homePage,
    },
    {
      path: '/events',
      name: 'eventspage',
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
      path: '/login',
      name: 'login',
      component: loginPage,
    },
    {
      path: '/about',
      name: 'about',
      component: aboutPage,
    },
    // {
    //   // Redirects all other paths to the homepage
    //   path: '*',
    //   redirect: '/',
    // },
  ],
});
