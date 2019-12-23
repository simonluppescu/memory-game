import { Language } from "./general";

export type EnglishCardData = {
  language: Language.ENGLISH;
  matcherId: number;
  englishText: string;
  englishPartOfSpeech: string;
};

export type JapaneseCardData = {
  language: Language.JAPANESE;
  matcherId: number;
  japaneseText: string;
  japaneseHira: string;
  japaneseLatin: string;
};
