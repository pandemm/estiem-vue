// Initial state
const state = {
  drawer: true,
};

// Getters
const getters = {
  drawer: () => state.drawer,
};

// Actions
const actions = {
  toggleDrawer: (context) => {
    context.commit('TOGGLE_DRAWER');
  },
  openDrawer: (context) => {
    context.commit('OPEN_DRAWER');
  },
};

// Mutations
const mutations = {
  'TOGGLE_DRAWER'(state) {
    console.log('mutate');
    state.drawer = !state.drawer;
  },  
  'OPEN_DRAWER'(state) {
    state.drawer = true;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
