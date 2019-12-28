import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState } from "../store/configureStore";
import CardTimer from "../components/CardTimer";
import { CardData } from "../types/goalItems";
import { countDownTimer, resetTimer } from "../actions";

type StateProps = {
  percent: number;
  revealedCards: Map<number, CardData>;
};
type DispatchProps = {
  handleCountDown: (currPercent: number) => void;
  handleResetTimer: () => void;
};
type Props = StateProps & DispatchProps;

const CardTimerContainer: React.FC<Props> = (props) => {
  let content = null;
  if (props.revealedCards.size === 1)
    content = (
      <CardTimer
        percent={props.percent}
        handleCountDown={props.handleCountDown}
        handleResetTimer={props.handleResetTimer}
      />
    );

  return content;
};

const mapStateToProps = (state: AppState): StateProps => ({
  percent: state.cardTimer,
  revealedCards: state.cardData.revealedCards
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  handleCountDown: (currPercent: number) => {
    if (currPercent > 0) dispatch(countDownTimer());
  },
  handleResetTimer: () => {
    dispatch(resetTimer());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CardTimerContainer);
