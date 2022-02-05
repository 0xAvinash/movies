import { ADD_FAVORITES, DELETE_FAVORITES } from "../constants";

export const addFavorites = (id, title, genre, releaseDate) => {
  return {
    type: ADD_FAVORITES,
    payload: { id, title, genre, releaseDate },
  };
};

export const deleteFavorites = (id, title, genre, releaseDate) => {
  return {
    type: DELETE_FAVORITES,
    payload: id,
  };
};

const initialState = {
  totalCount: 0,
  favoriteFilms: [],
};
export default function favoritesReducer(favorites = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...favorites,
        favoriteFilms: [...favorites.favoriteFilms, action.payload],
        totalCount: [...favorites.favoriteFilms].length + 1,
      };
    case DELETE_FAVORITES:
      if (favorites.totalCount > 0) {
        return {
          ...favorites,
          favoriteFilms: [
            ...favorites.favoriteFilms.filter((item) => {
              return item.id !== action.payload;
            }),
          ],
          totalCount: [...favorites.favoriteFilms].length - 1,
        };
      } else {
        return favorites;
      }
    default:
      return favorites;
  }
}
