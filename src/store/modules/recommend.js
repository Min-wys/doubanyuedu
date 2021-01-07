import { reqGetRecommendBooks } from "../../api/index"
export default {
  state: {
    recommendBooksList: {},
  },
  actions: {
    async getRecommendBooks({ commit }) {
      const recommendBooksList = await reqGetRecommendBooks();
      commit("GETRECOMMENDBOOKS", recommendBooksList);
    },

  },
  mutations: {
    GETRECOMMENDBOOKS(state, recommendBooksList) {
      state.recommendBooksList = recommendBooksList
    }
  },
  getters: {},
};
