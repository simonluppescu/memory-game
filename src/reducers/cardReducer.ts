import produce from "immer";

import { AppActions, ActionNames } from "../types/actionData";

const defaultState = { revealedCards: new Set<number>(), usedCards: new Set<number>() };
const cardReducer = (state = defaultState, action: AppActions): typeof defaultState => {
  switch (action.type) {
    case ActionNames.REVEAL_CARD:
      return produce(state, (newState) => {
        newState.revealedCards.add(action.cardId);
      });

    case ActionNames.HIDE_CARDS:
      return produce(state, (newState) => {
        newState.revealedCards.clear();
      });

    default:
      return state;
  }
};

export default cardReducer;
