import { CardData } from "./goalItems";

export enum ActionNames {
  REVEAL_CARD = "REVEAL_CARD",
  HIDE_CARDS = "HIDE_CARDS",
  SET_USED = "SET_USED",
  INCREMENT_FLIPS = "INCREMENT_FLIPS",
  INCREMENT_TIME = "INCREMENT_TIME",
  COUNT_DOWN_TIMER = "COUNT_DOWN_TIMER",
  RESET_TIMER = "RESET_TIMER",
  END_GAME = "END_GAME"
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

export type CountDownTimerAction = {
  type: ActionNames.COUNT_DOWN_TIMER;
};

export type ResetTimerAction = {
  type: ActionNames.RESET_TIMER;
};

export type EndGameAction = {
  type: ActionNames.END_GAME;
};

export type AppActions =
  | RevealCardAction
  | HideCardAction
  | SetUsedAction
  | IncrementFlipsAction
  | IncrementTimeAction
  | CountDownTimerAction
  | ResetTimerAction
  | EndGameAction;
