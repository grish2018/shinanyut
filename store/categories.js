export default {
  state() {
    return {
      categories: [],

    };
  },

  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },

  },
  actions: {
    async fetchCategories({ commit }) {
      const categories = await this.$axios.$get('https://web.gdml.ru/api/v1/categories_tree/');
      commit('setCategories', categories);
    },
  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
  },
};
