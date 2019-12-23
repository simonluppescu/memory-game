import shuffle from "shuffle-array";

import goalItems from "../data/goal.json";
import { EnglishCardData, JapaneseCardData } from "../types/goalItems";
import { Language } from "../types/general";

class DataProcessorService {
  englishItems: Array<EnglishCardData>;
  japaneseItems: Array<JapaneseCardData>;
  shuffledItems: Array<EnglishCardData | JapaneseCardData>;

  constructor() {
    const items = this._initializeItems();

    this.englishItems = items.englishItems;
    this.japaneseItems = items.japaneseItems;

    this.shuffledItems = this._getShuffledCardData();
  }

  private _getShuffledCardData(): Array<EnglishCardData | JapaneseCardData> {
    const allCards = [...this.englishItems, ...this.japaneseItems];

    return shuffle(allCards);
  }

  private _initializeItems(): { englishItems: Array<EnglishCardData>; japaneseItems: Array<JapaneseCardData> } {
    const englishItems: Array<EnglishCardData> = [];
    const japaneseItems: Array<JapaneseCardData> = [];

    goalItems.goal_items.forEach((goalItem: any, index: number) => {
      englishItems.push({
        language: Language.ENGLISH,
        matcherId: index,
        englishText: goalItem.item.cue.text,
        englishPartOfSpeech: goalItem.item.cue.part_of_speech
      });
      japaneseItems.push({
        language: Language.JAPANESE,
        matcherId: index,
        japaneseText: goalItem.item.response.text,
        japaneseHira: goalItem.item.response.transliterations.Hira,
        japaneseLatin: goalItem.item.response.transliterations.Latn
      });
    });

    return { englishItems, japaneseItems };
  }
}

export default DataProcessorService;
