import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import cardReducer from "../reducers/cardReducer";
import numFlipsReducer from "../reducers/numFlipsReducer";
import timeElapsedReducer from "../reducers/timeElapsedReducer";

const rootReducer = combineReducers({
  cardData: cardReducer,
  numFlips: numFlipsReducer,
  secondsElapsed: timeElapsedReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());
