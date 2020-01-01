import React from "react";

import "../styles/card.scss";

import { CardData, isLanguageCard, LanguageCardData, isSpecialCard, SpecialCardData } from "../types/goalItems";
import LanguageCard from "./LanguageCard";
import SpecialCard from "./SpecialCard";
import { AppState } from "../store/configureStore";

interface Props {
  isFlippedOver: boolean;
  isGameOver: boolean;
  itemData: CardData;
  handleRevealCard: (cardData: CardData) => void;
}

class Card extends React.Component<Props> {
  shouldComponentUpdate(nextProps: Props, nextState: AppState): boolean {
    if (nextProps.isFlippedOver === this.props.isFlippedOver && nextProps.isGameOver === this.props.isGameOver) {
      console.log("dont rerender");
      return false;
    }

    console.log("rerendering!");
    return true;
  }

  render() {
    console.log("Rendering Card", this.props.itemData.cardId);
    console.log(this.props);
    const { itemData, isFlippedOver, isGameOver, handleRevealCard } = this.props;

    let cardComponent = null;
    if (isLanguageCard(itemData)) {
      cardComponent = (
        <LanguageCard
          itemData={itemData as LanguageCardData}
          isFlippedOver={isFlippedOver}
          handleRevealCard={handleRevealCard}
        />
      );
    } else if (isSpecialCard(itemData)) {
      cardComponent = (
        <SpecialCard
          itemData={itemData as SpecialCardData}
          isFlippedOver={isFlippedOver || isGameOver}
          handleRevealCard={handleRevealCard}
        />
      );
    }

    return cardComponent;
  }
}

export default Card;
