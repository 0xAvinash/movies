import { SUCCESSFULL, ERROR } from "../constants";

export const successfull = (isLoggedIn = true) => {
  return {
    type: SUCCESSFULL,
    payload: isLoggedIn,
  };
};

export const error = (isLoggedIn = false) => {
  return {
    type: ERROR,
    payload: isLoggedIn,
  };
};

export default function loginReducer(isLoggedIn = false, action) {
  switch (action.type) {
    case SUCCESSFULL:
      return action.payload;
    case ERROR:
      return action.payload;
    default:
      return isLoggedIn;
  }
}
