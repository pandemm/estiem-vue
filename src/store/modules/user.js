import axios from 'axios';

// Initial state
const state = {
  user: "",
};

// Getters
const getters = {
  getUser: () => state.user,
};

// Actions
const actions = {
  getUser({ commit }) {
    let url = 'https://www.estiem.org/Internal/eventsapi/getuser';
    axios.get(url)
      .then((response) => {
        commit('GET_USER', response.data);
      });
  },
};

// Mutations
const mutations = {
  'GET_USER'(state, payload) {
    console.log(payload);
    state.user = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
