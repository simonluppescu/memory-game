import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import "../styles/game-stats.scss";

import { AppState } from "../store/configureStore";
import { incrementTime } from "../actions";
import TimeService from "../services/timeService";

type StateProps = {
  numFlips: number;
  secondsElapsed: number;
  isGameOver: boolean;
};
type DispatchProps = {
  incrementTime: () => void;
};
type Props = StateProps & DispatchProps;

let timer: NodeJS.Timeout;
const GameStatsContainer: React.FC<Props> = (props) => {
  const { numFlips, secondsElapsed, incrementTime, isGameOver } = props;

  useEffect(() => {
    if (isGameOver) {
      clearInterval(timer);
    } else {
      timer = setInterval(() => {
        incrementTime();
      }, 1000);
    }
  }, [incrementTime, isGameOver]);

  return (
    <div className="game-stats">
      Number of flips: {numFlips}, Time elapsed: {TimeService.convertToTime(secondsElapsed)}{" "}
      {isGameOver && <span className="game-over">Game over!</span>}
    </div>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  numFlips: state.numFlips,
  secondsElapsed: state.secondsElapsed,
  isGameOver: state.isGameOver
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  incrementTime: () => {
    dispatch(incrementTime());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GameStatsContainer);
