import { reqGetRecommendBooks } from "../../api/eBooks"
export default {
  state: {
    recommendBooksLists: {},
  },
  actions: {
    async getRecommendBooks({ commit }) {
      const recommendBooksLists = await reqGetRecommendBooks();
      commit("GETRECOMMENDBOOKS", recommendBooksLists);
    },

  },
  mutations: {
    GETRECOMMENDBOOKS(state, recommendBooksLists) {
      state.recommendBooksLists = recommendBooksLists
    }
  },
  getters: {},
};
