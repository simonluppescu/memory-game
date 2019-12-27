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
};
type DispatchProps = {
  incrementTime: () => void;
};
type Props = StateProps & DispatchProps;

const GameStatsContainer: React.FC<Props> = (props) => {
  const { incrementTime } = props;

  useEffect(() => {
    setInterval(() => {
      incrementTime();
    }, 1000);
  }, [incrementTime]);

  return (
    <div className="game-stats">
      Number of flips: {props.numFlips}, Time elapsed: {TimeService.convertToTime(props.secondsElapsed)}
    </div>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  numFlips: state.numFlips,
  secondsElapsed: state.secondsElapsed
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  incrementTime: () => {
    dispatch(incrementTime());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GameStatsContainer);
