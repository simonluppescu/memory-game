import React from "react";

import { LanguageCardData, CardData } from "../types/cardTypes";

interface Props {
  itemData: LanguageCardData;
  isFlippedOver: boolean;
  handleRevealCard: (cardData: CardData) => void;
}

const LanguageCard: React.FC<Props> = (props) => {
  const { itemData, isFlippedOver, handleRevealCard } = props;

  return isFlippedOver ? (
    <div className="card revealed">{itemData.text}</div>
  ) : (
    <div
      className="card"
      onClick={() => {
        handleRevealCard(itemData);
      }}
    ></div>
  );
};

export default LanguageCard;
