import React from "react";
import { connect } from "react-redux";
import { AppState } from "../store/configureStore";

import Card from "../components/Card";
import { EnglishCardData, JapaneseCardData } from "../types/goalItems";
import { Dispatch } from "redux";
import { revealCard } from "../actions";

type StateProps = {
  revealedCards: Set<number>;
};
type OwnProps = {
  itemData: EnglishCardData | JapaneseCardData;
};
type DispatchProps = {
  handleRevealCard: (cardId: number) => void;
};
type Props = StateProps & OwnProps & DispatchProps;

const CardContainer: React.FC<Props> = (props) => {
  return (
    <Card
      isRevealed={props.revealedCards.has(props.itemData.cardId)}
      itemData={props.itemData}
      handleRevealCard={props.handleRevealCard}
    ></Card>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  revealedCards: state.cardData.revealedCards
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  handleRevealCard: (cardId: number): void => {
    dispatch(revealCard(cardId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
