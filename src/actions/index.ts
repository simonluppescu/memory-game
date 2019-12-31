import {
  ActionNames,
  SetCardsAction,
  RevealCardAction,
  UnrevealCardsAction,
  HideCardAction,
  SetUsedAction,
  IncrementFlipsAction,
  IncrementTimeAction,
  CountDownTimerAction,
  ResetTimerAction,
  EndGameAction,
  IncrementMatchesAction,
  SetRevealedAction,
  ShuffleCardsAction,
  AddSpecialTimerAction,
  DecrementSpecialTimerAction,
  AddSpecialRetryAction,
  DecrementSpecialRetryAction
} from "../types/actionData";
import { CardData } from "../types/goalItems";

export const setCards = (cards: Array<CardData>): SetCardsAction => ({
  type: ActionNames.SET_CARDS,
  cards
});

export const revealCard = (cardData: CardData): RevealCardAction => ({
  type: ActionNames.REVEAL_CARD,
  cardData
});

export const unrevealCards = (cardIds: Array<number>): UnrevealCardsAction => ({
  type: ActionNames.UNREVEAL_CARDS,
  cardIds
});

export const hideCards = (): HideCardAction => ({
  type: ActionNames.HIDE_CARDS
});

export const setUsed = (cardIds: Array<number>): SetUsedAction => ({
  type: ActionNames.SET_USED,
  cardIds
});

export const setRevealed = (cards: Array<CardData>): SetRevealedAction => ({
  type: ActionNames.SET_REVEALED,
  cards
});

export const incrementMatches = (): IncrementMatchesAction => ({
  type: ActionNames.INCREMENT_MATCHES
});

export const incrementFlips = (): IncrementFlipsAction => ({
  type: ActionNames.INCREMENT_FLIPS
});

export const incrementTime = (): IncrementTimeAction => ({
  type: ActionNames.INCREMENT_TIME
});

export const countDownTimer = (): CountDownTimerAction => ({
  type: ActionNames.COUNT_DOWN_TIMER
});

export const resetTimer = (): ResetTimerAction => ({
  type: ActionNames.RESET_TIMER
});

export const endGame = (): EndGameAction => ({
  type: ActionNames.END_GAME
});

export const shuffleCards = (): ShuffleCardsAction => ({
  type: ActionNames.SHUFFLE_CARDS
});

export const addSpecialTimer = (): AddSpecialTimerAction => ({
  type: ActionNames.ADD_SPECIAL_TIMER
});

export const decrementSpecialTimer = (): DecrementSpecialTimerAction => ({
  type: ActionNames.DECREMENT_SPECIAL_TIMER
});

export const addSpecialRetry = (): AddSpecialRetryAction => ({
  type: ActionNames.ADD_SPECIAL_RETRY
});

export const decrementSpecialRetry = (): DecrementSpecialRetryAction => ({
  type: ActionNames.DECREMENT_SPECIAL_RETRY
});
