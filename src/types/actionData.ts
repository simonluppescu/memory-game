export enum ActionNames {
  REVEAL_CARD = "REVEAL_CARD",
  HIDE_CARDS = "HIDE_CARDS"
}

export type RevealCardAction = {
  type: ActionNames.REVEAL_CARD;
  cardId: number;
};

export type HideCardAction = {
  type: ActionNames.HIDE_CARDS;
};

export type AppActions = RevealCardAction | HideCardAction;
