import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import cardReducer from "../reducers/cardReducer";

const rootReducer = combineReducers({
  cardData: cardReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());
