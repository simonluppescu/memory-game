import { RevealCardAction, ActionNames } from "../types/actionData";

export const revealCard = (cardId: number): RevealCardAction => ({
  type: ActionNames.REVEAL_CARD,
  cardId
});
