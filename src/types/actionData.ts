import { CardData } from "./goalItems";

export enum ActionNames {
  SET_CARDS = "SET_CARDS",
  REVEAL_CARD = "REVEAL_CARD",
  UNREVEAL_CARDS = "UNREVEAL_CARDS",
  HIDE_CARDS = "HIDE_CARDS",
  SET_USED = "SET_USED",
  SET_REVEALED = "SET_REVEALED",
  INCREMENT_MATCHES = "INCREMENT_MATCHES",
  INCREMENT_FLIPS = "INCREMENT_FLIPS",
  INCREMENT_TIME = "INCREMENT_TIME",
  COUNT_DOWN_TIMER = "COUNT_DOWN_TIMER",
  RESET_TIMER = "RESET_TIMER",
  END_GAME = "END_GAME",
  SHUFFLE_CARDS = "SHUFFLE_CARDS",
  TRICK_CARDS = "TRICK_CARDS",
  ADD_SPECIAL_TIMER = "ADD_SPECIAL_TIMER",
  DECREMENT_SPECIAL_TIMER = "DECREMENT_SPECIAL_TIMER",
  ADD_SPECIAL_RETRY = "ADD_SPECIAL_RETRY",
  DECREMENT_SPECIAL_RETRY = "DECREMENT_SPECIAL_RETRY"
}

export type SetCardsAction = {
  type: ActionNames.SET_CARDS;
  cards: Array<CardData>;
};

export type RevealCardAction = {
  type: ActionNames.REVEAL_CARD;
  cardData: CardData;
};

export type UnrevealCardsAction = {
  type: ActionNames.UNREVEAL_CARDS;
  cardIds: Array<number>;
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

export type ShuffleCardsAction = {
  type: ActionNames.SHUFFLE_CARDS;
};

export type TrickCardsAction = {
  type: ActionNames.TRICK_CARDS;
  cardIdsToReveal: Array<number>;
  cardIdsToHide: Array<number>;
};

export type AddSpecialTimerAction = {
  type: ActionNames.ADD_SPECIAL_TIMER;
};

export type DecrementSpecialTimerAction = {
  type: ActionNames.DECREMENT_SPECIAL_TIMER;
};

export type AddSpecialRetryAction = {
  type: ActionNames.ADD_SPECIAL_RETRY;
};

export type DecrementSpecialRetryAction = {
  type: ActionNames.DECREMENT_SPECIAL_RETRY;
};

export type AppActions =
  | SetCardsAction
  | RevealCardAction
  | UnrevealCardsAction
  | HideCardAction
  | SetUsedAction
  | SetRevealedAction
  | IncrementMatchesAction
  | IncrementFlipsAction
  | IncrementTimeAction
  | CountDownTimerAction
  | ResetTimerAction
  | EndGameAction
  | ShuffleCardsAction
  | TrickCardsAction
  | AddSpecialTimerAction
  | DecrementSpecialTimerAction
  | AddSpecialRetryAction
  | DecrementSpecialRetryAction;
