import forumNewTopic from './forum-new-topic.vue';
import forumTopicList from './forum-topic-list.vue';
import forumSingleTopic from './forum-topic.vue';

const forumroutes = [
  {
    path: 'topics',
    name: 'topics',
    component: forumTopicList,
  },
  {
    path: 'newtopic',
    name: 'newtopic',
    component: forumNewTopic,
  },
  {
    path: 'topic/:id',
    name: 'singletopic',
    component: forumSingleTopic,
  },
];

export default forumroutes;
