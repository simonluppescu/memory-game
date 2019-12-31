import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { AppState } from "../store/configureStore";
import Card from "../components/Card";
import { CardReducerState } from "../reducers/cardReducer";
import { CardData, isSpecialCard, SpecialCardData, LanguageCardData } from "../types/goalItems";
import {
  revealCard,
  hideCards,
  setUsed,
  incrementFlips,
  incrementMatches,
  endGame,
  shuffleCards,
  addSpecialTimer,
  decrementSpecialTimer,
  addSpecialRetry,
  decrementSpecialRetry,
  resetTimer,
  unrevealCards
} from "../actions";
import DataProcessorService from "../services/dataProcessorService";
import { SpecialCardType } from "../types/general";

type StateProps = {
  allCardData: CardReducerState;
  isGameOver: boolean;
  specialRetryCount: number;
};
type OwnProps = {
  itemData: CardData;
};
type DispatchProps = {
  handleRevealCard: (
    cardData: CardData,
    revealedCards: Map<number, CardData>,
    numPairsMatched: number,
    isGameOver: boolean,
    specialRetryCount: number
  ) => void;
};
type Props = StateProps & OwnProps & DispatchProps;

const CardContainer: React.FC<Props> = (props) => {
  const { allCardData, itemData, isGameOver, specialRetryCount } = props;
  const { revealedCards, usedCards, numPairsMatched } = allCardData;
  const { cardId } = itemData;

  return (
    <Card
      isFlippedOver={revealedCards.has(cardId) || usedCards.has(cardId)}
      itemData={itemData}
      handleRevealCard={(cardData: CardData) => {
        props.handleRevealCard(cardData, revealedCards, numPairsMatched, isGameOver, specialRetryCount);
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
      dispatch(addSpecialTimer());
      break;

    case SpecialCardType.RETRY:
      dispatch(addSpecialRetry());
      break;
  }
};

const mapStateToProps = (state: AppState): StateProps => ({
  allCardData: state.cardData,
  isGameOver: state.isGameOver,
  specialRetryCount: state.specialRetryCount
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  handleRevealCard: (
    cardData: CardData,
    revealedCards: Map<number, CardData>,
    numPairsMatched: number,
    isGameOver: boolean,
    specialRetryCount: number
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
      dispatch(decrementSpecialTimer());
      dispatch(decrementSpecialRetry());

      const revealedCardData = revealedCards.values().next().value as LanguageCardData;
      if (revealedCardData.matcherId === cardData.matcherId) {
        // We need to do DataProcessorService.NUM_PAIRS - 1 because this represents the last pair we're matching
        if (numPairsMatched === DataProcessorService.NUM_PAIRS - 1) dispatch(endGame());

        dispatch(setUsed([revealedCardData.cardId, cardData.cardId]));
        dispatch(incrementMatches());
        dispatch(hideCards());
        dispatch(incrementFlips());
      } else if (specialRetryCount > 0) {
        setTimeout(() => {
          dispatch(unrevealCards([cardData.cardId]));
          dispatch(resetTimer());
          dispatch(decrementSpecialRetry());
        }, 1000);
      } else {
        dispatch(incrementFlips());

        setTimeout(() => {
          dispatch(hideCards());
        }, 1000);
      }
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
