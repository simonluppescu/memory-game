import React from "react";
import DataProcessorService from "../services/dataProcessorService";

import IsGameOverContext from "../contexts/IsGameOverContext";
import CardContainer from "../containers/CardContainer";
import GameStatsContainer from "../containers/GameStatsContainer";
import CardTimerContainer from "../containers/CardTimerContainer";

interface Props {
  isGameOver: boolean;
}

const Board: React.FC<Props> = (props) => {
  const dataProcessor = new DataProcessorService();
  // console.log(dataProcessor.shuffledItems);

  return (
    <div className="board">
      <IsGameOverContext.Provider value={props.isGameOver}>
        <GameStatsContainer />
        <CardTimerContainer />
        {dataProcessor.shuffledItems.map((item, index) => (
          <CardContainer key={index} itemData={item}></CardContainer>
        ))}
      </IsGameOverContext.Provider>
    </div>
  );
};

export default Board;
