import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { AppState } from "../store/configureStore";
import Card from "../components/Card";
import { CardData } from "../types/goalItems";
import { revealCard, hideCards, setUsed, incrementFlips } from "../actions";

type StateProps = {
  revealedCards: Map<number, CardData>;
  usedCards: Set<number>;
};
type OwnProps = {
  itemData: CardData;
};
type DispatchProps = {
  handleRevealCard: (cardData: CardData, revealedCards: Map<number, CardData>) => void;
};
type Props = StateProps & OwnProps & DispatchProps;

const CardContainer: React.FC<Props> = (props) => {
  const { revealedCards, usedCards, itemData } = props;
  const { cardId } = itemData;

  return (
    <Card
      isFlippedOver={revealedCards.has(cardId) || usedCards.has(cardId)}
      itemData={itemData}
      handleRevealCard={(cardData: CardData) => {
        props.handleRevealCard(cardData, revealedCards);
      }}
    ></Card>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  revealedCards: state.cardData.revealedCards,
  usedCards: state.cardData.usedCards
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  handleRevealCard: (cardData: CardData, revealedCards: Map<number, CardData>): void => {
    if (revealedCards.size <= 1) dispatch(revealCard(cardData));

    if (revealedCards.size === 1) {
      dispatch(incrementFlips());

      const revealedCardData = revealedCards.values().next().value as CardData;
      if (revealedCardData.matcherId === cardData.matcherId) {
        dispatch(setUsed([revealedCardData.cardId, cardData.cardId]));
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
