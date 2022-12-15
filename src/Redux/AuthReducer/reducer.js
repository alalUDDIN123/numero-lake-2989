import * as types from "./actionTypes";

const initialState = {
  isAuth: false,
  isAuthLoading: false,
  authToken: "",
  isAuthError: false,
  userName: "",
  userEmail: "",
  userPhoto: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isAuthLoading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthLoading: false,
        isAuth: true,
        authToken: payload.accessToken,
        userName: payload.displayName,
        userEmail: payload.email,
        userPhoto: payload.photoURL,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isAuthLoading: false,
        isAuth: false,
        authToken: "",
      };
    default:
      return state;
  }
};
