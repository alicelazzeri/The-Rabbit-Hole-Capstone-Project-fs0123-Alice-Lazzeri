import { GET_BOOK_QUERY } from "../actions";

const initialState = {
  content: {
    data: [],
  },
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK_QUERY:
      const books = action.payload.items.map(book => {
        return {
          id: book.id,
          title: book.volumeInfo.title,
          subtitle: book.volumeInfo.subtitle,
          authors: book.volumeInfo.authors?.join(", "),
          publisher: book.volumeInfo.publisher,
          imageLinks: book.volumeInfo.imageLinks,
          publishedDate: book.volumeInfo.publishedDate,
          description: book.volumeInfo.description,
          retailPrice: book.saleInfo.retailPrice,
          buyLink: book.saleInfo.buyLink,
          previewLink: book.volumeInfo.previewLink,
        };
      });

      return {
        ...state,
        content: {
          data: books,
        },
      };

    default:
      return state;
  }
};

export default searchReducer;
