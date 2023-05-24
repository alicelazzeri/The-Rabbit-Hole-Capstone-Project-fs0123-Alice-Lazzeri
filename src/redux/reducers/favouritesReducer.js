import { ADD_TO_FAVOURITES, DELETE_FAVOURITES } from "../actions";

const initialState = {
  favourites: {
    content: [],
  },
};
const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      const books = {
        id: action.payload.id,
        title: action.payload.title,
        subtitle: action.payload.subtitle,
        authors: action.payload.authors,
        publisher: action.payload.publisher,
        imageLinks: action.payload.imageLinks,
        publishedDate: action.payload.publishedDate,
        description: action.payload.description,
        retailPrice: action.payload.retailPrice,
      };

      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, books],

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
