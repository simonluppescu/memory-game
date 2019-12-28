import React from "react";
import DataProcessorService from "../services/dataProcessorService";

import CardContainer from "../containers/CardContainer";
import GameStatsContainer from "../containers/GameStatsContainer";
import CardTimerContainer from "../containers/CardTimerContainer";
import { CardData } from "../types/goalItems";

interface Props {
  setRevealedCards: (cards: Array<CardData>) => void;
}

const Board: React.FC<Props> = (props) => {
  const dataProcessor = new DataProcessorService();
  const { allItems, shuffledItems } = dataProcessor;
  const initialReveals = new Map<number, CardData>();
  for (let i = 0; i < allItems.length && initialReveals.size < 3; i++) {
    const item = allItems[i];
    if (initialReveals.has(item.matcherId)) continue;

    initialReveals.set(item.matcherId, item);
  }

  props.setRevealedCards(Array.from(initialReveals.values()));

  return (
    <div className="board">
      <GameStatsContainer />
      <CardTimerContainer />
      {shuffledItems.map((item, index) => (
        <CardContainer key={index} itemData={item}></CardContainer>
      ))}
    </div>
  );
};

export default Board;
