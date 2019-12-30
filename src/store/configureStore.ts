import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import cardReducer from "../reducers/cardReducer";
import numFlipsReducer from "../reducers/numFlipsReducer";
import timeElapsedReducer from "../reducers/timeElapsedReducer";
import cardTimerReducer from "../reducers/cardTimerReducer";
import gameOverReducer from "../reducers/gameOverReducer";
import allCardsReducer from "../reducers/allCardsReducer";

const rootReducer = combineReducers({
  cards: allCardsReducer,
  cardData: cardReducer,
  numFlips: numFlipsReducer,
  secondsElapsed: timeElapsedReducer,
  cardTimer: cardTimerReducer,
  isGameOver: gameOverReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());
