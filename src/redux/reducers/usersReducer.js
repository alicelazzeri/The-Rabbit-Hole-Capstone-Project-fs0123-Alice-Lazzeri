// import { REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS } from "../actions";

const initialState = {
  user: null,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    // case REGISTER_USER_SUCCESS:
    //   return {
    //     ...state,
    //     user: action.payload,
    //     error: null,
    //   };
    // case REGISTER_USER_FAILURE:
    //   return {
    //     ...state,
    //     user: null,
    //     error: action.payload,
    //   };
    default:
      return state;
  }
};

export default usersReducer;
