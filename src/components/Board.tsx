import React from "react";

import DataProcessorService from "../services/dataProcessorService";
import CardContainer from "../containers/CardContainer";
import GameStatsContainer from "../containers/GameStatsContainer";
import CardTimerContainer from "../containers/CardTimerContainer";
import { CardData } from "../types/goalItems";
import { Language } from "../types/general";

interface Props {
  setRevealedCards: (cards: Array<CardData>) => void;
}

class Board extends React.Component<Props> {
  static readonly NUM_INITIAL_REVEALS = 4;

  private _getInitialReveals(shuffledItems: Array<CardData>): Array<CardData> {
    const initialReveals = new Map<number, CardData>();
    for (
      let i = 0, currLang = shuffledItems[i].language;
      i < shuffledItems.length && initialReveals.size < Board.NUM_INITIAL_REVEALS;
      i++
    ) {
      const item = shuffledItems[i];

      if (initialReveals.has(item.matcherId) || item.language !== currLang) continue;

      initialReveals.set(item.matcherId, item);
      currLang = currLang === Language.ENGLISH ? Language.JAPANESE : Language.ENGLISH;
    }

    return Array.from(initialReveals.values());
  }

  render() {
    const dataProcessor = new DataProcessorService();
    const { shuffledItems } = dataProcessor;

    const initialReveals = this._getInitialReveals(shuffledItems);

    this.props.setRevealedCards(initialReveals);

    return (
      <div className="board">
        <GameStatsContainer />
        <CardTimerContainer />
        {shuffledItems.map((item, index) => (
          <CardContainer key={index} itemData={item}></CardContainer>
        ))}
      </div>
    );
  }
}

export default Board;
