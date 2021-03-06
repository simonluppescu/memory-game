import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import CardTimer from "../components/CardTimer";
import { AppState } from "../store/configureStore";
import { CardData } from "../types/cardTypes";
import { countDownTimer, resetTimer, endGame } from "../actions";

type StateProps = {
  percent: number;
  revealedCards: Map<number, CardData>;
  isGameOver: boolean;
  specialTimerCount: number;
};
type DispatchProps = {
  handleCountDown: (currPercent: number) => void;
  handleResetTimer: () => void;
};
type Props = StateProps & DispatchProps;

const CardTimerContainer: React.FC<Props> = (props) => {
  let content = null;
  if (props.revealedCards.size === 1 && !props.isGameOver) {
    content = (
      <CardTimer
        percent={props.percent}
        specialTimerCount={props.specialTimerCount}
        handleCountDown={props.handleCountDown}
        handleResetTimer={props.handleResetTimer}
      />
    );
  } else {
    content = <div className="card-timer-placeholder"></div>;
  }

  return content;
};

const mapStateToProps = (state: AppState): StateProps => ({
  percent: state.cardTimer,
  revealedCards: state.cardData.revealedCards,
  isGameOver: state.isGameOver,
  specialTimerCount: state.specialTimerCount
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  handleCountDown: (currPercent: number) => {
    if (currPercent > 0) dispatch(countDownTimer());
    if (currPercent <= 0) dispatch(endGame());
  },
  handleResetTimer: () => {
    dispatch(resetTimer());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CardTimerContainer);
