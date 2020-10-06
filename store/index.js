export default {
  state() {
    return {
      initialized: false,
      drawer: false,
      isActive: false,
    };
  },
  actions: {
    async INIT({ state, commit }) {
      if (state.initialized) return;

      commit('SET_INITIALIZED', true);
    },
  },
  mutations: {
    SET_INITIALIZED(state, val) {
      state.initialized = val;
    },
    SHOW_MENU(state) {
      state.drawer = true;
    },
    HIDE_MENU(state) {
      state.drawer = false;
    },
    SHOW_CATALOG(state) {
      state.isActive = true;
    },
    HIDE_CATALOG(state) {
      state.isActive = false;
    },
  },
  getters: {
    getSowMenu(state) {
      return state.drawer;
    },
    getShowCatalog(state) {
      return state.isActive;
    },
  },

};
