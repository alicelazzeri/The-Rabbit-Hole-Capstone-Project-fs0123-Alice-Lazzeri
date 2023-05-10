export const GET_BOOKS = "GET_BOOKS";

export const getBooksAction = data => {
  return { type: GET_BOOKS, payload: data };
};

export const getBooksFetch = () => {
  return async dispatch => {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=subject:english+literature+classics&orderBy=newest&maxResults=40`;
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
