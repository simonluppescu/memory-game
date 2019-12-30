import { CardData } from "./goalItems";

export enum ActionNames {
  SET_CARDS = "SET_CARDS",
  REVEAL_CARD = "REVEAL_CARD",
  HIDE_CARDS = "HIDE_CARDS",
  SET_USED = "SET_USED",
  SET_REVEALED = "SET_REVEALED",
  INCREMENT_MATCHES = "INCREMENT_MATCHES",
  INCREMENT_FLIPS = "INCREMENT_FLIPS",
  INCREMENT_TIME = "INCREMENT_TIME",
  COUNT_DOWN_TIMER = "COUNT_DOWN_TIMER",
  RESET_TIMER = "RESET_TIMER",
  END_GAME = "END_GAME"
}

export type SetCardsAction = {
  type: ActionNames.SET_CARDS;
  cards: Array<CardData>;
};

export type RevealCardAction = {
  type: ActionNames.REVEAL_CARD;
  cardData: CardData;
};

export type HideCardAction = {
  type: ActionNames.HIDE_CARDS;
};

export type SetRevealedAction = {
  type: ActionNames.SET_REVEALED;
  cards: Array<CardData>;
};

export type SetUsedAction = {
  type: ActionNames.SET_USED;
  cardIds: Array<number>;
};

export type IncrementMatchesAction = {
  type: ActionNames.INCREMENT_MATCHES;
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
  | SetCardsAction
  | RevealCardAction
  | HideCardAction
  | SetUsedAction
  | SetRevealedAction
  | IncrementMatchesAction
  | IncrementFlipsAction
  | IncrementTimeAction
  | CountDownTimerAction
  | ResetTimerAction
  | EndGameAction;
