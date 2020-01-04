import React from "react";

import "../styles/card.scss";

import LanguageCard from "./LanguageCard";
import SpecialCard from "./SpecialCard";
import { CardData, isLanguageCard, LanguageCardData, isSpecialCard, SpecialCardData } from "../types/goalItems";

interface Props {
  isFlippedOver: boolean;
  isGameOver: boolean;
  itemData: CardData;
  handleRevealCard: (cardData: CardData) => void;
}

class Card extends React.PureComponent<Props> {
  render() {
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
