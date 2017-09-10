import axios from 'axios';
import Vue from 'vue'

// Initial state
const state = {
  events: [],
};

// Getters
const getters = {
  events: () => state.events,
  internalEvents: () => state.events,
  event: (id) => {
    let event = state.events.find(event => event.Id == id);
    return state.events.find(event => event.Id == id)
  },
  getEventById: (state, getters) => (id) => {
    let event = state.events.find(event => event.Id == id);
    return event;
  },
  getEventParticipantsById: (state, getters) => (id) => {
    console.log(id);
    this.getEventById(id);
    let eps = state.events.find(event => event.Id == id);
    console.log(event);
    return event;
  },
};

// Actions
const actions = {
  fetchEvents({ commit }, params) {
    let events;
<<<<<<< HEAD
    let url = 'http://new.estiem.org/api/eventsapi/getfutureevents';
=======
    let url = 'https://www.estiem.org/Internal/eventsapi/getfutureevents';
>>>>>>> 032f1425fe5f0a667ee1b1a98b2b9ff81eb8c25e
    if (params.eventtypes) {
      url += '?';
    }
    axios.get(url)
      .then((response) => {
        events = response.data;
        commit('FETCH_EVENTS', events);
      });
  },
  fetchEventParticipants({ commit }, id) {
    let eps;
    let url = 'https://www.estiem.org/Internal/eventsapi/geteventparticipants?ìd=' + id;
    console.log(url);
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
  toggleSelected: ({ commit }, id) => {
    // Insert axios post request here
    commit('TOGGLE_SELECTED', id);
  }
};

// Mutations
const mutations = {
  'FETCH_EVENTS'(state, payload) {
    state.events = payload;
  },
  'TOGGLE_SELECTED'(state, id) {
    let event = state.events.find(event => event.Id == id)
    if (!event.isSelected) {
      Vue.set(event, "isSelected", true)
    }
    else {
      event.isSelected = false;
    }

  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
