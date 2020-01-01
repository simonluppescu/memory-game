import produce from "immer";

import { AppActions, ActionNames } from "../types/actionData";
import { CardData } from "../types/goalItems";

export type CardReducerState = {
  revealedCards: { [key: number]: CardData };
  usedCards: { [key: number]: true };
  numPairsMatched: number;
};
const defaultState: CardReducerState = {
  revealedCards: {},
  usedCards: {},
  numPairsMatched: 0
};

const cardReducer = (state = defaultState, action: AppActions): CardReducerState => {
  switch (action.type) {
    case ActionNames.REVEAL_CARD:
      return produce(state, (newState) => {
        newState.revealedCards[action.cardData.cardId] = action.cardData;
      });

    case ActionNames.UNREVEAL_CARDS:
      return produce(state, (newState) => {
        action.cardIds.forEach((cardId) => {
          delete newState.revealedCards[cardId];
        });
      });

    case ActionNames.HIDE_CARDS:
      return produce(state, (newState) => {
        newState.revealedCards = {};
      });

    case ActionNames.SET_USED:
      return produce(state, (newState) => {
        action.cardIds.forEach((cardId) => {
          newState.usedCards[cardId] = true;
        });
      });

    case ActionNames.SET_REVEALED:
      return produce(state, (newState) => {
        action.cards.forEach((card) => {
          newState.revealedCards[card.cardId] = card;
        });
      });

    case ActionNames.INCREMENT_MATCHES:
      return produce(state, (newState) => {
        newState.numPairsMatched += 1;
      });

    case ActionNames.TRICK_CARDS:
      return produce(state, (newState) => {
        action.cardIdsToHide.forEach((cardId) => {
          delete newState.usedCards[cardId];
        });
        action.cardIdsToReveal.forEach((cardId) => {
          newState.usedCards[cardId] = true;
        });
      });

    default:
      return state;
  }
};

export default cardReducer;
