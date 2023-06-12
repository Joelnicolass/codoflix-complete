export const favoritesInitialState = {
  favorites: [],
};

export const favoritesKey = "favorites";

export const FAVORITES_UPDATE = "UPDATE_FAVORITES";

export const favoritesReducer = (state = favoritesInitialState, action) => {
  switch (action.type) {
    case FAVORITES_UPDATE:
      return {
        ...state,
        favorites: action.payload,
      };

    default:
      return state;
  }
};
