import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { AppState } from "../store/configureStore";
import Card from "../components/Card";
import { CardReducerState } from "../reducers/cardReducer";
import { CardData, isSpecialCard, SpecialCardData, LanguageCardData } from "../types/goalItems";
import { revealCard, hideCards, setUsed, incrementFlips, incrementMatches, endGame, shuffleCards } from "../actions";
import DataProcessorService from "../services/dataProcessorService";
import { SpecialCardType } from "../types/general";

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

const applySpecialEffect = (cardData: SpecialCardData, dispatch: Dispatch): void => {
  switch (cardData.type) {
    case SpecialCardType.TRICK:
      console.log("TRICK");
      break;

    case SpecialCardType.SHUFFLE:
      dispatch(shuffleCards());
      break;

    case SpecialCardType.TIMER:
      console.log("TIMER");
      break;

    case SpecialCardType.RETRY:
      console.log("RETRY");
      break;
  }
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

    if (isSpecialCard(cardData)) {
      setTimeout(() => {
        applySpecialEffect(cardData, dispatch);

        dispatch(setUsed([cardData.cardId]));
        dispatch(hideCards());
      }, 1000);

      return;
    }

    if (revealedCards.size === 1) {
      dispatch(incrementFlips());

      const revealedCardData = revealedCards.values().next().value as LanguageCardData;
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
