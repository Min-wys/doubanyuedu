import { reqGetGoodSale } from "../../api/eBooks"
export default {
  state: {
    saleList: {}
  },
  actions: {
    async getGoodSale({ commit }) {
      const saleList = await reqGetGoodSale();
      commit("GETGOODSALE", saleList);
    },


  },
  mutations: {
    GETGOODSALE(state, saleList) {
      state.saleList = saleList
    }




  },
  getters: {},
};
