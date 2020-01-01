import React from "react";

import { SpecialCardData, CardData } from "../types/goalItems";

interface Props {
  itemData: SpecialCardData;
  isFlippedOver: boolean;
  handleRevealCard: (cardData: CardData) => void;
}

class SpecialCard extends React.PureComponent<Props> {
  render() {
    console.log("Rendering Special", this.props.itemData.cardId);
    console.log(this.props);
    const { itemData, isFlippedOver, handleRevealCard } = this.props;

    return isFlippedOver ? (
      <div className="card revealed">
        <div className="special-card">{itemData.type}</div>
      </div>
    ) : (
      <div
        className="card"
        onClick={() => {
          handleRevealCard(itemData);
        }}
      ></div>
    );
  }
}

export default SpecialCard;
