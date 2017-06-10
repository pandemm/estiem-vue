import axios from 'axios';

// Initial state
const state = {
    threads: [],
};

// Getters
const getters = {
    threads: () => state.threads,
};

// Actions
const actions = {
    addThread({ commit }, topic) {
        commit('ADD_THREAD', topic);
    },
};

// Mutations
const mutations = {
    'ADD_THREAD'(state, payload) {
        console.log(payload);
        state.threads.push(payload);
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
