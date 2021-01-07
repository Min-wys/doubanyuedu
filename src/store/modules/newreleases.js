import { reqGetNewreleases } from "../../api/index"
export default {
  state: {
    newReleasesBooksList: {},
  },
  actions: {
    async getNewreleases({ commit }) {
      const newReleasesBooksList = await reqGetNewreleases();
      commit("GETNEWRELEASES", newReleasesBooksList);
    },

  },
  mutations: {
    GETNEWRELEASES(state, newReleasesBooksList) {
      state.newReleasesBooksList = newReleasesBooksList
    }
  },
  getters: {},
};
