export const GET_BOOKS = "GET_BOOKS";
export const GET_CARROLL = "GET_CARROLL";
export const GET_AUSTEN = "GET_AUSTEN";
export const GET_DICKENS = "GET_DICKENS";
export const GET_HARDY = "GET_HARDY";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

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

export const registerFetch = userData => {
  return async dispatch => {
    const URL = `http://localhost:3001/users`;
    try {
      let response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        let data = await response.json();
        dispatch(registerSuccessAction(data));
      }
    } catch (errorMsg) {
      dispatch(registerFailureAction(errorMsg));
    }
  };
};

// export const getQueryJobFetch = (parametro, query) => {
//   return async dispatch => {
//     const URL = `https://strive-benchmark.herokuapp.com/api/jobs?${parametro}=${query}&limit=30`;
//     const headers = {
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         Authorization:
//           "Bearer " +
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlNDY5ZjdhYWQ5OTAwMTQ0ZjBjOTgiLCJpYXQiOjE2ODE4MDI5MzUsImV4cCI6MTY4MzAxMjUzNX0.2Lfp7xI-o5SiSeV-QyDpMq82KC7otp9TJB1rtGH22b0",
//       },
//     };
//     try {
//       let risposta = await fetch(URL, headers);
//       if (risposta.ok) {
//         let dato = await risposta.json();
//         dispatch(getQueryJobAction(dato.data));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
