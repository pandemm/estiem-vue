import Vue from 'vue';
import Vuex from 'vuex';
import events from './modules/events';
import layout from './modules/layout';
import forum from './modules/forum';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    events,
    layout,
    forum
  },
});
