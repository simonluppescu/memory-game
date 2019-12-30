import React from "react";

import { SpecialCardData, CardData } from "../types/goalItems";

interface Props {
  itemData: SpecialCardData;
  isFlippedOver: boolean;
  handleRevealCard: (cardData: CardData) => void;
}

const SpecialCard: React.FC<Props> = (props) => {
  const { itemData, isFlippedOver, handleRevealCard } = props;

  return isFlippedOver ? (
    <div className="card revealed">{itemData.type}</div>
  ) : (
    <div
      className="card special"
      onClick={() => {
        handleRevealCard(itemData);
      }}
    ></div>
  );
};

export default SpecialCard;
