import { GET_AUSTEN, GET_BOOKS, GET_CARROLL, GET_DICKENS, GET_HARDY } from "../actions";

const initialState = {
  content: {
    data: [],
  },
};

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
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
          loading: false,
          error: null,
        },
      };
    case GET_CARROLL:
      const carrollBooks = action.payload.items.map(book => {
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
          data: carrollBooks,
        },
      };
    case GET_AUSTEN:
      const austenBooks = action.payload.items.map(book => {
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
          data: austenBooks,
        },
      };

    case GET_DICKENS:
      const dickensBooks = action.payload.items.map(book => {
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
          data: dickensBooks,
        },
      };

    case GET_HARDY:
      const hardyBooks = action.payload.items.map(book => {
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
          data: hardyBooks,
        },
      };

    default:
      return state;
  }
};

export default homePageReducer;
