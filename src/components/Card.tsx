import React from "react";

import "../styles/card.scss";

import { CardData } from "../types/goalItems";
import { Language } from "../types/general";

interface Props {
  isFlippedOver: boolean;
  itemData: CardData;
  handleRevealCard: (cardData: CardData) => void;
}

class Card extends React.PureComponent<Props> {
  render() {
    const { itemData, isFlippedOver, handleRevealCard } = this.props;

    let content;
    if (itemData.language === Language.ENGLISH) {
      content = (
        <>
          {itemData.englishText}
          <br />
          {itemData.englishPartOfSpeech}
        </>
      );
    } else if (itemData.language === Language.JAPANESE) {
      content = (
        <>
          {itemData.japaneseText}
          <br />
          {itemData.japaneseHira}
          <br />
          {itemData.japaneseLatin}
        </>
      );
    }
    return isFlippedOver ? (
      <div className="card revealed">{content}</div>
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

export default Card;
