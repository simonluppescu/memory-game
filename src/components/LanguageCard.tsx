import React from "react";

import { Language } from "../types/general";
import { LanguageCardData, CardData } from "../types/goalItems";

interface Props {
  itemData: LanguageCardData;
  isFlippedOver: boolean;
  handleRevealCard: (cardData: CardData) => void;
}

const LanguageCard: React.FC<Props> = (props) => {
  const { itemData, isFlippedOver, handleRevealCard } = props;

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
};

export default LanguageCard;
