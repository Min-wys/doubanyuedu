export default {
  state: {
    books: ["162794639", "34157247", "166538175"],
    isInBookShelf: false,
  },
  actions: {},
  mutations: {
    ADD_BOOK(state, book) {
      /* 添加书籍传入id */
      state.isInBookShelf = true;
      state.books.push(book);
    },
    DELETE_BOOK(state, books) {
      books.forEach((item) => {
        const index = state.books.indexOf(item);
        state.books.splice(index, 1);
      });
    },
    ISINBOOKSHELF(state, id) {
      if (state.books.includes(id)) {
        state.isInBookShelf = true;
      } else {
        state.isInBookShelf = false;
      }
    },

  },
  getters: {},
};
