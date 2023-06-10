export const authInitialState = {
  user: null,
  isLogged: false,
};

export const authKey = "auth";

export const authInit = (initialState = authInitialState) => {
  return JSON.parse(localStorage.getItem(authKey)) || initialState;
};

export const AUTH_LOGIN = "AUTH_LOGIN";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

export const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        user: action.payload,
        isLogged: true,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        user: null,
        isLogged: false,
      };

    default:
      return state;
  }
};
