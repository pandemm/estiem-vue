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
    console.log("getting")
    let event = state.events.find(event => event.Id == id);
    console.log(event);
    return state.events.find(event => event.Id == id)
  },
  getEventById: (state, getters) => (id) => {
    console.log(id);
    let event = state.events.find(event => event.Id == id);
    console.log(event);
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
    let url = 'https://www.estiem.org/Internal/eventsapi/getfutureevents';
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
    console.log('mutate');
    console.log(payload);
    state.events = payload;
  },
  'TOGGLE_SELECTED'(state, id) {
    let event = state.events.find(event => event.Id == id)
    console.log(event);
    console.log("toggleselect");
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
