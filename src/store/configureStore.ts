import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import cardReducer from "../reducers/cardReducer";
import numFlipsReducer from "../reducers/numFlipsReducer";
import timeElapsedReducer from "../reducers/timeElapsedReducer";
import cardTimerReducer from "../reducers/cardTimerReducer";
import gameReducer from "../reducers/gameReducer";

const rootReducer = combineReducers({
  cardData: cardReducer,
  numFlips: numFlipsReducer,
  secondsElapsed: timeElapsedReducer,
  cardTimer: cardTimerReducer,
  isGameOver: gameReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());
