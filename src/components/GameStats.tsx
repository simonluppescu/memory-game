import React from "react";

import TimeService from "../services/timeService";

interface Props {
  numFlips: number;
  secondsElapsed: number;
  isGameOver: boolean;
}

const GameStats: React.FC<Props> = (props) => {
  const { numFlips, secondsElapsed, isGameOver } = props;

  return (
    <div className="game-stats">
      Number of flips: {numFlips}, Time elapsed: {TimeService.convertToTime(secondsElapsed)}{" "}
      {isGameOver && <span className="game-over">Game over!</span>}
    </div>
  );
};

export default GameStats;
