import React from "react";
import { connect } from "react-redux";
import { AppState } from "../store/configureStore";

import Card from "../components/Card";
import { EnglishCardData, JapaneseCardData } from "../types/goalItems";
import { Dispatch } from "redux";
import { revealCard, hideCards } from "../actions";

type StateProps = {
  revealedCards: Set<number>;
};
type OwnProps = {
  itemData: EnglishCardData | JapaneseCardData;
};
type DispatchProps = {
  handleRevealCard: (cardId: number, revealedCards: Set<number>) => void;
};
type Props = StateProps & OwnProps & DispatchProps;

const CardContainer: React.FC<Props> = (props) => {
  return (
    <Card
      isRevealed={props.revealedCards.has(props.itemData.cardId)}
      itemData={props.itemData}
      handleRevealCard={(cardId: number) => {
        props.handleRevealCard(cardId, props.revealedCards);
      }}
    ></Card>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  revealedCards: state.cardData.revealedCards
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  handleRevealCard: (cardId: number, revealedCards: Set<number>): void => {
    if (revealedCards.size <= 1) dispatch(revealCard(cardId));

    if (revealedCards.size === 1) {
      setTimeout(() => {
        dispatch(hideCards());
      }, 1000);
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
