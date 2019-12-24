import { CardData } from "./goalItems";

export enum ActionNames {
  REVEAL_CARD = "REVEAL_CARD",
  HIDE_CARDS = "HIDE_CARDS",
  SET_USED = "SET_USED"
}

export type RevealCardAction = {
  type: ActionNames.REVEAL_CARD;
  cardData: CardData;
};

export type HideCardAction = {
  type: ActionNames.HIDE_CARDS;
};

export type SetUsedAction = {
  type: ActionNames.SET_USED;
  cardIds: Array<number>;
};

export type AppActions = RevealCardAction | HideCardAction | SetUsedAction;
