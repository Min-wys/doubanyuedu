export default {
  state: {
    books: ["162794639", "34157247", "166538175"],
  },
  actions: {},
  mutations: {
    ADD_BOOK(state, book) {
      /* 添加书籍传入id */
      state.books.push(book);
    },
    DELETE_BOOK(state, books) {
      books.forEach((item) => {
        const index = state.books.indexOf(item);
        state.books.splice(index, 1);
      });
    },
  },
  getters: {},
};
