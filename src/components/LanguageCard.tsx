import React from "react";

import { Language } from "../types/general";
import { LanguageCardData, CardData } from "../types/goalItems";

interface Props {
  itemData: LanguageCardData;
  isFlippedOver: boolean;
  handleRevealCard: (cardData: CardData) => void;
}

class LanguageCard extends React.Component<Props> {
  render() {
    console.log("Rendering Language", this.props.itemData.cardId);
    console.log(this.props);
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

export default LanguageCard;
