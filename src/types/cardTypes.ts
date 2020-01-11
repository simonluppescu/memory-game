import { Language, SpecialCardType } from "./general";

export type LanguageCardData = {
  cardId: number;
  matcherId: number;
  text: string;
  language: Language;
};

export type SpecialCardData = {
  cardId: number;
  type: SpecialCardType;
};

export type CardData = LanguageCardData | SpecialCardData;

export function isLanguageCard(cardData: CardData): cardData is LanguageCardData {
  return (cardData as LanguageCardData).matcherId !== undefined;
}
export function isSpecialCard(cardData: CardData): cardData is SpecialCardData {
  return (cardData as SpecialCardData).type !== undefined;
}
