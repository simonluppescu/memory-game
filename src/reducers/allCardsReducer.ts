import { AppActions, ActionNames } from "../types/actionData";
import { CardData } from "../types/goalItems";

const defaultState: Array<CardData> = [];
const allCardsReducer = (state = defaultState, action: AppActions): Array<CardData> => {
  switch (action.type) {
    case ActionNames.SET_CARDS:
      return action.cards;

    default:
      return state;
  }
};

export default allCardsReducer;
