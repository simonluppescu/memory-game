import React from "react";

import "../styles/card.scss";

import { EnglishCardData, JapaneseCardData } from "../types/goalItems";
import { Language } from "../types/general";

interface Props {
  isRevealed: boolean;
  itemData: EnglishCardData | JapaneseCardData;
  handleRevealCard: (cardId: number) => void;
}

class Card extends React.PureComponent<Props> {
  render() {
    const { itemData, isRevealed, handleRevealCard } = this.props;

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
    return (
      <div
        className="card"
        onClick={() => {
          handleRevealCard(itemData.cardId);
        }}
      >
        {isRevealed && content}
      </div>
    );
  }
}

export default Card;
