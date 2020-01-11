import shuffle from "shuffle-array";

import cards from "../data/cards.json";
import { CardData, SpecialCardData, LanguageCardData } from "../types/cardTypes";
import { Language, SpecialCardType } from "../types/general";

class DataProcessorService {
  static readonly NUM_PAIRS = 4;
  static readonly SPECIAL_COUNTS: { [key: string]: number } = {
    [SpecialCardType.RETRY]: 1,
    [SpecialCardType.TIMER]: 1,
    [SpecialCardType.SHUFFLE]: 1,
    [SpecialCardType.TRICK]: 1
  };

  shuffledItems: Array<CardData>;

  constructor() {
    const items = this._initializeItems();

    this.shuffledItems = shuffle(items);
  }

  private _initializeItems(): Array<CardData> {
    const englishItems: Array<LanguageCardData> = [];
    const japaneseItems: Array<LanguageCardData> = [];
    const specialItems: Array<SpecialCardData> = [];

    const allItems = shuffle(cards.items);
    console.log(allItems);

    let cardId = 0;
    for (let index = 0; index < DataProcessorService.NUM_PAIRS; index++) {
      const item = allItems[index];

      englishItems.push({
        language: Language.ENGLISH,
        matcherId: index,
        cardId: ++cardId,
        text: item.english
      });
      japaneseItems.push({
        language: Language.JAPANESE,
        matcherId: index,
        cardId: ++cardId,
        text: item.japanese
      });
    }

    for (const key in DataProcessorService.SPECIAL_COUNTS) {
      for (let i = 0; i < DataProcessorService.SPECIAL_COUNTS[key]; i++) {
        specialItems.push({
          cardId: ++cardId,
          type: key as SpecialCardType
        });
      }
    }

    return [...englishItems, ...japaneseItems, ...specialItems];
  }
}

export default DataProcessorService;
