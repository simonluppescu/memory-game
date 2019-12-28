import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState } from "../store/configureStore";
import { CardData } from "../types/goalItems";
import { setRevealed, hideCards } from "../actions";
import Board from "../components/Board";

type StateProps = {};
type DispatchProps = {
  setRevealedCards: (cards: Array<CardData>) => void;
};
type Props = StateProps & DispatchProps;

class BoardContainer extends Component<Props> {
  render() {
    return <Board setRevealedCards={this.props.setRevealedCards} />;
  }
}

const mapStateToProps = (state: AppState): StateProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  setRevealedCards: (cards: Array<CardData>): void => {
    dispatch(setRevealed(cards));

    setTimeout(() => {
      dispatch(hideCards());
    }, 2000);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
