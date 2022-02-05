import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";

import loginReducer from "./login";
import favoritesReducer from "./favorites";
import seenListReducer from "./seenlist";
import userReducer from "./users";

const rootReducer = combineReducers({
  login: loginReducer,
  favorites: favoritesReducer,
  seenlist: seenListReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login", "favorites", "seenlist", "user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(logger));

export const persistor = persistStore(store);

export default store;
