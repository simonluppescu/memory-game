import produce from "immer";
import shuffle from "shuffle-array";

import { AppActions, ActionNames } from "../types/actionData";
import { CardData } from "../types/cardTypes";

const defaultState: Array<CardData> = [];
const allCardsReducer = (state = defaultState, action: AppActions): Array<CardData> => {
  switch (action.type) {
    case ActionNames.SET_CARDS:
      return action.cards;

    case ActionNames.SHUFFLE_CARDS:
      return produce(state, (newState) => {
        shuffle(newState);
      });

    default:
      return state;
  }
};

export default allCardsReducer;
