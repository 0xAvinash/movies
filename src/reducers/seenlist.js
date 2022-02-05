import { ADD_SEEN_LIST, DELETE_SEEN_LIST } from "../constants";

export const addSeenList = (id, title, genere, releaseDate) => {
  return {
    type: ADD_SEEN_LIST,
    payload: { id, title, genere, releaseDate },
  };
};

export const deleteSeenList = (id) => ({
  type: DELETE_SEEN_LIST,
  payload: id,
});

const initialState = {
  seenFilms: [],
  totalCount: 0,
};

function seenListReducer(seenlist = initialState, action) {
  switch (action.type) {
    case ADD_SEEN_LIST:
      return {
        ...seenlist,
        seenFilms: [...seenlist.seenFilms, action.payload],
        totalCount: [...seenlist.seenFilms].length + 1,
      };
    case DELETE_SEEN_LIST:
      if (seenlist.totalCount > 0) {
        return {
          ...seenlist,
          seenFilms: [
            ...seenlist.seenFilms.filter((item) => {
              return item.id !== action.payload;
            }),
          ],
          totalCount: [...seenlist.seenFilms].length - 1,
        };
      } else {
        return seenlist;
      }
    default:
      return seenlist;
  }
}
export default seenListReducer;
