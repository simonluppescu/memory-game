import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import "../styles/game-stats.scss";

import { AppState } from "../store/configureStore";
import { incrementTime } from "../actions";
import GameStats from "../components/GameStats";

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

  return <GameStats numFlips={numFlips} secondsElapsed={secondsElapsed} isGameOver={isGameOver} />;
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
