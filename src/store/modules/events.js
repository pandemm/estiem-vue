import axios from 'axios';

// Initial state
const state = {
  events: [],
};

// Getters
const getters = {
  events: () => state.events,
  internalEvents: () => state.events,
};

// Actions
const actions = {
  fetchEvents({ commit }, params) {
    let events;
    let url = 'https://www.estiem.org/Internal/mvc/events/getfutureevents';
    if (params.eventtypes) {
      url += '?';
    }
    axios.get(url)
      .then((response) => {
        events = response.data;
        console.log(events);
        commit('FETCH_EVENTS', events);
      });
  },
  getUsers: (context) => {
    context.commit('fetch');
  },
};

// Mutations
const mutations = {
  'FETCH_EVENTS' (state, payload) {
    console.log('mutate');
    console.log(payload);
    state.events = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
