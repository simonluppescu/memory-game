import React from "react";

import "../styles/card.scss";

import { CardData, isLanguageCard, LanguageCardData, isSpecialCard, SpecialCardData } from "../types/goalItems";
import LanguageCard from "./LanguageCard";
import SpecialCard from "./SpecialCard";

interface Props {
  isFlippedOver: boolean;
  itemData: CardData;
  handleRevealCard: (cardData: CardData) => void;
}

class Card extends React.PureComponent<Props> {
  render() {
    const { itemData, isFlippedOver, handleRevealCard } = this.props;

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
          isFlippedOver={isFlippedOver}
          handleRevealCard={handleRevealCard}
        />
      );
    }

    return cardComponent;
  }
}

export default Card;
