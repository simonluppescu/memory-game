import React from "react";
import DataProcessorService from "../services/dataProcessorService";

import CardContainer from "../containers/CardContainer";
import GameStatsContainer from "../containers/GameStatsContainer";
import CardTimerContainer from "../containers/CardTimerContainer";

interface Props {}

const Board: React.FC<Props> = () => {
  const dataProcessor = new DataProcessorService();
  console.log(dataProcessor.shuffledItems);

  return (
    <div className="board">
      <GameStatsContainer />
      <CardTimerContainer />
      {dataProcessor.shuffledItems.map((item, index) => (
        <CardContainer key={index} itemData={item}></CardContainer>
      ))}
    </div>
  );
};

export default Board;
