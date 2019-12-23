import { RevealCardAction, ActionNames, HideCardAction } from "../types/actionData";

export const revealCard = (cardId: number): RevealCardAction => ({
  type: ActionNames.REVEAL_CARD,
  cardId
});

export const hideCards = (): HideCardAction => ({
  type: ActionNames.HIDE_CARDS
});
