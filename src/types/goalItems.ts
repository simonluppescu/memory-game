import { Language, SpecialCardType } from "./general";

export type EnglishCardData = {
  language: Language.ENGLISH;
  matcherId: number;
  cardId: number;
  englishText: string;
  englishPartOfSpeech: string;
};

export type JapaneseCardData = {
  language: Language.JAPANESE;
  matcherId: number;
  cardId: number;
  japaneseText: string;
  japaneseHira: string;
  japaneseLatin: string;
};

export type LanguageCardData = EnglishCardData | JapaneseCardData;

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
