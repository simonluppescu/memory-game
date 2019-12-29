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

export type SpecialCard = {
  cardId: number;
  type: SpecialCardType;
};

export type CardData = EnglishCardData | JapaneseCardData | SpecialCard;
