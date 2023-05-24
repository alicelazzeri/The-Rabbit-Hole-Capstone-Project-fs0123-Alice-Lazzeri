export const GET_BOOKS = "GET_BOOKS";
export const GET_CARROLL = "GET_CARROLL";
export const GET_AUSTEN = "GET_AUSTEN";
export const GET_DICKENS = "GET_DICKENS";
export const GET_HARDY = "GET_HARDY";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";
export const GET_BOOK_QUERY = "GET_BOOK_QUERY";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const DELETE_FAVOURITES = "DELETE_FAVOURITES";

export const getBooksAction = data => {
  return { type: GET_BOOKS, payload: data };
};

export const getCarrollAction = data => {
  return { type: GET_CARROLL, payload: data };
};

export const getAustenAction = data => {
  return { type: GET_AUSTEN, payload: data };
};

export const getDickensAction = data => {
  return { type: GET_DICKENS, payload: data };
};

export const getHardyAction = data => {
  return { type: GET_HARDY, payload: data };
};

export const registerSuccessAction = data => {
  return { type: REGISTER_USER_SUCCESS, payload: data };
};

export const registerFailureAction = errorMsg => {
  return { type: REGISTER_USER_FAILURE, payload: errorMsg };
};

export const getQueryBookAction = data => {
  return { type: GET_BOOK_QUERY, payload: data };
};

export const addToFavouritesAction = book => {
  return { type: ADD_TO_FAVOURITES, payload: book };
};

export const deleteFavouritesAction = i => {
  return { type: DELETE_FAVOURITES, payload: i };
};

export const getBooksFetch = () => {
  return async dispatch => {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=subject:english+literature+classics&orderBy=newest`;
    try {
      let response = await fetch(URL);
      if (response.ok) {
        let data = await response.json();
        dispatch(getBooksAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCarrollFetch = () => {
  return async dispatch => {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=inauthor:%22Lewis%20Carroll%22+intitle:%22Lewis%20Carroll%22&langRestrict=en`;
    try {
      let response = await fetch(URL);
      if (response.ok) {
        let data = await response.json();
        dispatch(getCarrollAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAustenFetch = () => {
  return async dispatch => {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=inauthor:%22Jane%20Austen%22+intitle:%22Jane%20Austen%22&langRestrict=en`;
    try {
      let response = await fetch(URL);
      if (response.ok) {
        let data = await response.json();
        dispatch(getAustenAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDickensFetch = () => {
  return async dispatch => {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=inauthor:%22Charles%20Dickens%22+intitle:%22Charles%20Dickens%22&langRestrict=en`;
    try {
      let response = await fetch(URL);
      if (response.ok) {
        let data = await response.json();
        dispatch(getDickensAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getHardyFetch = () => {
  return async dispatch => {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=inauthor:%22Thomas%20Hardy%22+intitle:%22Thomas%20Hardy%22&langRestrict=en`;
    try {
      let response = await fetch(URL);
      if (response.ok) {
        let data = await response.json();
        dispatch(getHardyAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getQueryBookFetch = (query, filter) => {
  const api = `https://www.googleapis.com/books/v1/volumes`;
  return async dispatch => {
    const langRestrictParam = "&langRestrict=en";
    const URL = `${api}?q=${query}${filter ? `+${filter}` : ""}${langRestrictParam}`;
    try {
      let response = await fetch(URL);
      if (response.ok) {
        let data = await response.json();
        dispatch(getQueryBookAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
