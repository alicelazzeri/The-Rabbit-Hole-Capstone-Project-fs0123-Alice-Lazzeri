import { ADD_TO_FAVOURITES, DELETE_FAVOURITES } from "../actions";

const initialState = {
  favourites: {
    content: [],
  },
};
const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
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
        };
      });
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
          data: books,
          loading: false,
          error: null,
        },
      };
    case DELETE_FAVOURITES:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter((_, i) => i !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default favouritesReducer;
