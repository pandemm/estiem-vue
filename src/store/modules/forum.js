import axios from 'axios';

// Initial state
const state = {
    topics: [],
};

// Getters
const getters = {
    topics: () => state.topics,
    getTopic: (id) => { state.topics.find(a => a.topicId === id) },
    getTopicById: (state, getters) => (id) => {
        console.log(id);
        return state.topics.find(t => t.topicId === id);
      }
    
};

// Actions
const actions = {
    addTopic({ commit }, topic) {
        commit('ADD_TOPIC', topic);
    },
    fetchTopics({ commit }) {
        axios.get('http://new.estiem.org/api/forumapi/Gettopics')
            .then( response => {     
                let topics = response.data;
                console.log(topics);
                commit('FETCH_TOPICS', topics);
            })
    },
    fetchTopic({commit}, id) {
        axios.get('http://new.estiem.org/api/forumapi/Gettopic?id=' + id)
            .then( response => {
                let topic = state.topics.find(t => t.topicId == id);
                let i = state.topics.indexOf(topic);
                console.log('fet');
                state.topics[i] = response.data;
                commit('FETCH_TOPIC', state.topics)

            });
    }
};

// Mutations
const mutations = {
    'ADD_TOPIC'(state, payload) {
        console.log(payload);
        state.topics.push(payload);
    },
    'FETCH_TOPICS'(state, payload) {
        state.topics = payload;
    },
    'FETCH_TOPIC'(state, payload) {
        state.topics = payload;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
