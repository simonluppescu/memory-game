import {
  RevealCardAction,
  ActionNames,
  HideCardAction,
  SetUsedAction,
  IncrementFlipsAction,
  IncrementTimeAction
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

export const incrementFlips = (): IncrementFlipsAction => ({
  type: ActionNames.INCREMENT_FLIPS
});

export const incrementTime = (): IncrementTimeAction => ({
  type: ActionNames.INCREMENT_TIME
});
