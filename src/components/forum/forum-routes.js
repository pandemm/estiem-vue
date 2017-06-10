import forumNewTopic from './forum-new-topic.vue';
import forumThreadList from './forum-thread-list.vue';

const forumroutes = [
  {
    path: 'newtopic',
    name: 'newtopic',
    component: forumNewTopic,
  },
  {
    path: 'threadlist',
    name: 'threadList',
    component: forumThreadList,
  },

];

export default forumroutes;
