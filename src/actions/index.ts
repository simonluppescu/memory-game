import {
  RevealCardAction,
  ActionNames,
  HideCardAction,
  SetUsedAction,
  IncrementFlipsAction,
  IncrementTimeAction,
  CountDownTimerAction,
  ResetTimerAction,
  EndGameAction,
  IncrementMatchesAction,
  SetRevealedAction
} from "../types/actionData";
import { CardData } from "../types/goalItems";

export const revealCard = (cardData: CardData): RevealCardAction => ({
  type: ActionNames.REVEAL_CARD,
  cardData
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
