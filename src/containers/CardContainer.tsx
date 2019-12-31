import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { AppState } from "../store/configureStore";
import Card from "../components/Card";
import { CardReducerState } from "../reducers/cardReducer";
import { CardData, isSpecialCard, SpecialCardData, LanguageCardData, isLanguageCard } from "../types/goalItems";
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
  unrevealCards,
  trickCards
} from "../actions";
import DataProcessorService from "../services/dataProcessorService";
import { SpecialCardType } from "../types/general";

type StateProps = {
  allCards: Array<CardData>;
  allCardData: CardReducerState;
  isGameOver: boolean;
  specialRetryCount: number;
};
type OwnProps = {
  itemData: CardData;
};
type DispatchProps = {
  handleRevealCard: (
    allCards: Array<CardData>,
    cardData: CardData,
    allCardData: CardReducerState,
    isGameOver: boolean,
    specialRetryCount: number
  ) => void;
};
type Props = StateProps & OwnProps & DispatchProps;

const CardContainer: React.FC<Props> = (props) => {
  const { allCards, allCardData, itemData, isGameOver, specialRetryCount } = props;
  const { revealedCards, usedCards } = allCardData;
  const { cardId } = itemData;

  return (
    <Card
      isFlippedOver={revealedCards.has(cardId) || usedCards.has(cardId)}
      itemData={itemData}
      handleRevealCard={(cardData: CardData) => {
        props.handleRevealCard(allCards, cardData, allCardData, isGameOver, specialRetryCount);
      }}
    ></Card>
  );
};

const applySpecialEffect = (
  allCards: Array<CardData>,
  allCardData: CardReducerState,
  card: SpecialCardData,
  dispatch: Dispatch
): void => {
  switch (card.type) {
    case SpecialCardType.TRICK: {
      if (allCardData.usedCards.size === 0) break;

      let matcherIdToReveal = null;
      const cardIdsToReveal: Array<number> = [];
      let i;
      for (i = 0; i < allCards.length; i++) {
        const thisCard = allCards[i];
        if (isSpecialCard(thisCard)) continue;

        if (!allCardData.usedCards.has(thisCard.cardId)) {
          matcherIdToReveal = thisCard.matcherId;
          cardIdsToReveal.push(thisCard.cardId);
          break;
        }
      }
      for (i = i + 1; i < allCards.length; i++) {
        const thisCard = allCards[i];
        if (isSpecialCard(thisCard)) continue;

        if (thisCard.matcherId === matcherIdToReveal) {
          cardIdsToReveal.push(thisCard.cardId);
          break;
        }
      }
      let matcherIdToHide = null;
      const cardIdsToHide: Array<number> = [];
      for (i = 0; i < allCards.length; i++) {
        const thisCard = allCards[i];
        if (isSpecialCard(thisCard)) continue;

        if (allCardData.usedCards.has(thisCard.cardId)) {
          matcherIdToHide = thisCard.matcherId;
          cardIdsToHide.push(thisCard.cardId);
          break;
        }
      }
      for (i = i + 1; i < allCards.length; i++) {
        const thisCard = allCards[i];
        if (isSpecialCard(thisCard)) continue;

        if (thisCard.matcherId === matcherIdToHide) {
          cardIdsToHide.push(thisCard.cardId);
          break;
        }
      }
      console.log("card reveal", cardIdsToReveal);
      console.log("card hide", cardIdsToHide);
      if (cardIdsToReveal.length > 0 && cardIdsToHide.length > 0) {
        dispatch(trickCards(cardIdsToReveal, cardIdsToHide));
      }

      break;
    }

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
  allCards: state.cards,
  allCardData: state.cardData,
  isGameOver: state.isGameOver,
  specialRetryCount: state.specialRetryCount
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  handleRevealCard: (
    allCards: Array<CardData>,
    cardData: CardData,
    allCardData: CardReducerState,
    isGameOver: boolean,
    specialRetryCount: number
  ): void => {
    if (isGameOver) return;

    const { revealedCards, numPairsMatched } = allCardData;
    if (revealedCards.size <= 1) dispatch(revealCard(cardData));

    if (isSpecialCard(cardData)) {
      setTimeout(() => {
        applySpecialEffect(allCards, allCardData, cardData, dispatch);

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
