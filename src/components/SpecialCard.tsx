import React from "react";

import { SpecialCardData, CardData } from "../types/goalItems";

interface Props {
  itemData: SpecialCardData;
  isFlippedOver: boolean;
  handleRevealCard: (cardData: CardData) => void;
}

const SpecialCard: React.FC<Props> = (props) => {
  const { itemData, isFlippedOver, handleRevealCard } = props;

  // This output is temporarily distinguishing these cards from the normal language cards for debugging
  return isFlippedOver ? (
    <div className="card revealed">
      <div className="special-card">{itemData.type}</div>
    </div>
  ) : (
    <div
      className="card special"
      onClick={() => {
        handleRevealCard(itemData);
      }}
    >
      {itemData.type}
    </div>
  );
};

export default SpecialCard;
