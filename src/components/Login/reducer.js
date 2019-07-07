import { LOGIN_SUCCESS, LOGOUT } from "./actions";

export const initialState = {
  isLoggedIn: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};
