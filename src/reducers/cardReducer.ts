import produce from "immer";

import { AppActions, ActionNames } from "../types/actionData";
import { CardData } from "../types/goalItems";

const defaultState = {
  revealedCards: new Map<number, CardData>(),
  usedCards: new Set<number>()
};
const cardReducer = (state = defaultState, action: AppActions): typeof defaultState => {
  switch (action.type) {
    case ActionNames.REVEAL_CARD:
      return produce(state, (newState) => {
        newState.revealedCards.set(action.cardData.cardId, action.cardData);
      });

    case ActionNames.HIDE_CARDS:
      return produce(state, (newState) => {
        newState.revealedCards.clear();
      });

    case ActionNames.SET_USED:
      return produce(state, (newState) => {
        action.cardIds.forEach((cardId) => {
          newState.usedCards.add(cardId);
        });
      });

    default:
      return state;
  }
};

export default cardReducer;
