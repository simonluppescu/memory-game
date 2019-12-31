import React from "react";

import CardContainer from "../containers/CardContainer";
import GameStatsContainer from "../containers/GameStatsContainer";
import CardTimerContainer from "../containers/CardTimerContainer";
import { CardData } from "../types/goalItems";

interface Props {
  cards: Array<CardData>;
}

const Board: React.FC<Props> = (props) => {
  return (
    <div className="board">
      <GameStatsContainer />
      <CardTimerContainer />
      {props.cards.map((item, index) => (
        <CardContainer key={index} itemData={item} />
      ))}
    </div>
  );
};

export default Board;
