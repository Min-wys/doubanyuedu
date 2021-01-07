import { reqGetBooksClassify } from "../../api/eBooks"
export default {
  state: {
    booksClassify: {},
  },
  actions: {
    async getBooksClassify({ commit }) {
      const booksClassify = await reqGetBooksClassify();
      commit("GETBOOKSCLASSIFY", booksClassify);
    },

  },
  mutations: {
    GETBOOKSCLASSIFY(state, booksClassify) {
      state.booksClassify = booksClassify
    }
  },
  getters: {},
};
