import produce from "immer";

import { AppActions, ActionNames } from "../types/actionData";
import { CardData } from "../types/goalItems";

const defaultState = {
  revealedCards: new Map<number, CardData>(),
  usedCards: new Set<number>(),
  numPairsMatched: 0
};
export type CardReducerState = typeof defaultState;

const cardReducer = (state = defaultState, action: AppActions): CardReducerState => {
  switch (action.type) {
    case ActionNames.REVEAL_CARD:
      return produce(state, (newState) => {
        newState.revealedCards.set(action.cardData.cardId, action.cardData);
      });

    case ActionNames.UNREVEAL_CARDS:
      return produce(state, (newState) => {
        action.cardIds.forEach((cardId) => {
          newState.revealedCards.delete(cardId);
        });
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

    case ActionNames.SET_REVEALED:
      return produce(state, (newState) => {
        action.cards.forEach((card) => {
          newState.revealedCards.set(card.cardId, card);
        });
      });

    case ActionNames.INCREMENT_MATCHES:
      return produce(state, (newState) => {
        newState.numPairsMatched += 1;
      });

    default:
      return state;
  }
};

export default cardReducer;
