import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { AppState } from "../store/configureStore";
import Card from "../components/Card";
import { CardReducerState } from "../reducers/cardReducer";
import { CardData } from "../types/goalItems";
import { revealCard, hideCards, setUsed, incrementFlips, incrementMatches, endGame } from "../actions";
import DataProcessorService from "../services/dataProcessorService";

type StateProps = {
  allCardData: CardReducerState;
  isGameOver: boolean;
};
type OwnProps = {
  itemData: CardData;
};
type DispatchProps = {
  handleRevealCard: (
    cardData: CardData,
    revealedCards: Map<number, CardData>,
    numPairsMatched: number,
    isGameOver: boolean
  ) => void;
};
type Props = StateProps & OwnProps & DispatchProps;

const CardContainer: React.FC<Props> = (props) => {
  const { allCardData, itemData, isGameOver } = props;
  const { revealedCards, usedCards, numPairsMatched } = allCardData;
  const { cardId } = itemData;

  return (
    <Card
      isFlippedOver={revealedCards.has(cardId) || usedCards.has(cardId)}
      itemData={itemData}
      handleRevealCard={(cardData: CardData) => {
        props.handleRevealCard(cardData, revealedCards, numPairsMatched, isGameOver);
      }}
    ></Card>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  allCardData: state.cardData,
  isGameOver: state.isGameOver
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  handleRevealCard: (
    cardData: CardData,
    revealedCards: Map<number, CardData>,
    numPairsMatched: number,
    isGameOver: boolean
  ): void => {
    if (isGameOver) return;

    if (revealedCards.size <= 1) dispatch(revealCard(cardData));

    if (revealedCards.size === 1) {
      dispatch(incrementFlips());

      const revealedCardData = revealedCards.values().next().value as CardData;
      if (revealedCardData.matcherId === cardData.matcherId) {
        if (numPairsMatched === DataProcessorService.NUM_PAIRS - 1) dispatch(endGame());

        dispatch(setUsed([revealedCardData.cardId, cardData.cardId]));
        dispatch(incrementMatches());
        dispatch(hideCards());
      } else {
        setTimeout(() => {
          dispatch(hideCards());
        }, 1000);
      }
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
