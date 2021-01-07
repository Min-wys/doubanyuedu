import { reqGetNewBooks } from "../../api/index"
export default {
  state: {
    newBooksList: {},
  },
  actions: {
    async getNewBooks({ commit }) {
      const newBooksList = await reqGetNewBooks();
      commit("GETNEWBOOKS", newBooksList);
    },

  },
  mutations: {
    GETNEWBOOKS(state, newBooksList) {
      state.newBooksList = newBooksList
    }
  },
  getters: {},
};
