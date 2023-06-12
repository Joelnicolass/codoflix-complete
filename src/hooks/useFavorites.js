import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { favoritesKey } from "../reducers/favoritesReducer";
import { useAuth } from "../core/auth/hooks/useAuth";
import { updateFavorites } from "../services/firebase.services";

export const useFavorites = () => {
  const { state: authState } = useAuth();
  const { state, dispatch } = useContext(FavoritesContext);

  const _updateInDB = async (favorites) => {
    console.log("favorites", favorites);
    console.log("authState.user.uid", authState.user.uid);

    await updateFavorites(authState.user.uid, favorites);
  };

  const addFavorite = async (favorite) => {
    dispatch({
      type: "UPDATE_FAVORITES",
      payload: [...state.favorites, favorite],
    });

    localStorage.setItem(
      favoritesKey,
      JSON.stringify([...state.favorites, favorite])
    );

    await _updateInDB([...state.favorites, favorite]);
  };

  const removeFavorite = async (favorite) => {
    const newFavorites = state.favorites.filter((f) => f !== favorite);

    dispatch({
      type: "UPDATE_FAVORITES",
      payload: newFavorites,
    });

    localStorage.setItem(favoritesKey, JSON.stringify(newFavorites));

    await _updateInDB(newFavorites);
  };

  const clearFavorites = () => {
    localStorage.removeItem(favoritesKey);
  };

  const isFavorite = (favorite) => state.favorites.includes(favorite);

  return {
    favorites: state.favorites,
    addFavorite,
    removeFavorite,
    clearFavorites,
    isFavorite,
  };
};
