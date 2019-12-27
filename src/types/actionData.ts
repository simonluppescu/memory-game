import { CardData } from "./goalItems";

export enum ActionNames {
  REVEAL_CARD = "REVEAL_CARD",
  HIDE_CARDS = "HIDE_CARDS",
  SET_USED = "SET_USED",
  INCREMENT_FLIPS = "INCREMENT_FLIPS",
  INCREMENT_TIME = "INCREMENT_TIME"
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

export type IncrementFlipsAction = {
  type: ActionNames.INCREMENT_FLIPS;
};

export type IncrementTimeAction = {
  type: ActionNames.INCREMENT_TIME;
};

export type AppActions = RevealCardAction | HideCardAction | SetUsedAction | IncrementFlipsAction | IncrementTimeAction;
