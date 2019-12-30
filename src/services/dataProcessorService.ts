import shuffle from "shuffle-array";

import goalItems from "../data/goal.json";
import { EnglishCardData, JapaneseCardData, CardData, SpecialCardData } from "../types/goalItems";
import { Language, SpecialCardType } from "../types/general";

class DataProcessorService {
  static readonly NUM_PAIRS = 4;
  static readonly SPECIAL_COUNTS: { [key: string]: number } = {
    [SpecialCardType.RETRY]: 1,
    [SpecialCardType.TIMER]: 1,
    [SpecialCardType.SHUFFLE]: 1,
    [SpecialCardType.TRICK]: 1
  };

  allItems: Array<CardData>;
  shuffledItems: Array<CardData>;

  constructor() {
    const items = this._initializeItems();

    this.allItems = items;
    this.shuffledItems = this.allItems.slice();
    shuffle(this.shuffledItems);
  }

  private _initializeItems(): Array<CardData> {
    const englishItems: Array<EnglishCardData> = [];
    const japaneseItems: Array<JapaneseCardData> = [];
    const specialItems: Array<SpecialCardData> = [];

    let index;
    for (index = 1; index < DataProcessorService.NUM_PAIRS * 2; index += 2) {
      const goalItem = goalItems.goal_items[index];

      englishItems.push({
        language: Language.ENGLISH,
        matcherId: index,
        cardId: index,
        englishText: goalItem.item.cue.text,
        englishPartOfSpeech: goalItem.item.cue.part_of_speech
      });
      japaneseItems.push({
        language: Language.JAPANESE,
        matcherId: index,
        cardId: index - 1,
        japaneseText: goalItem.item.response.text,
        japaneseHira: goalItem.item.response.transliterations.Hira,
        japaneseLatin: goalItem.item.response.transliterations.Latn
      });
    }

    for (const key in DataProcessorService.SPECIAL_COUNTS) {
      for (let i = 0; i < DataProcessorService.SPECIAL_COUNTS[key]; i++) {
        specialItems.push({
          cardId: index,
          type: key as SpecialCardType
        });
        index++;
      }
    }

    return [...englishItems, ...japaneseItems, ...specialItems];
  }
}

export default DataProcessorService;
