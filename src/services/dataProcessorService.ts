import shuffle from "shuffle-array";

import goalItems from "../data/goal.json";
import { EnglishCardData, JapaneseCardData, CardData } from "../types/goalItems";
import { Language } from "../types/general";

class DataProcessorService {
  static readonly NUM_PAIRS = 10;

  englishItems: Array<EnglishCardData>;
  japaneseItems: Array<JapaneseCardData>;
  shuffledItems: Array<CardData>;

  constructor() {
    const items = this._initializeItems();

    this.englishItems = items.englishItems;
    this.japaneseItems = items.japaneseItems;

    this.shuffledItems = this._getShuffledCardData();
  }

  private _getShuffledCardData(): Array<CardData> {
    const allCards = [...this.englishItems, ...this.japaneseItems];

    return shuffle(allCards);
  }

  private _initializeItems(): { englishItems: Array<EnglishCardData>; japaneseItems: Array<JapaneseCardData> } {
    const englishItems: Array<EnglishCardData> = [];
    const japaneseItems: Array<JapaneseCardData> = [];

    for (let index = 0; index < DataProcessorService.NUM_PAIRS; index++) {
      const goalItem = goalItems.goal_items[index];

      englishItems.push({
        language: Language.ENGLISH,
        matcherId: index,
        cardId: 2 * index,
        englishText: goalItem.item.cue.text,
        englishPartOfSpeech: goalItem.item.cue.part_of_speech
      });
      japaneseItems.push({
        language: Language.JAPANESE,
        matcherId: index,
        cardId: 2 * index + 1,
        japaneseText: goalItem.item.response.text,
        japaneseHira: goalItem.item.response.transliterations.Hira,
        japaneseLatin: goalItem.item.response.transliterations.Latn
      });
    }

    return { englishItems, japaneseItems };
  }
}

export default DataProcessorService;
