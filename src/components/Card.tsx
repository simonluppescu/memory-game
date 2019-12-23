import React from "react";

import "../styles/card.scss";

import { EnglishCardData, JapaneseCardData } from "../types/goalItems";
import { Language } from "../types/general";

interface Props {
  itemData: EnglishCardData | JapaneseCardData;
}

const Card: React.FC<Props> = (props) => {
  let content;
  if (props.itemData.language === Language.ENGLISH) {
    content = (
      <>
        {props.itemData.englishText}
        <br />
        {props.itemData.englishPartOfSpeech}
      </>
    );
  } else if (props.itemData.language === Language.JAPANESE) {
    content = (
      <>
        {props.itemData.japaneseText}
        <br />
        {props.itemData.japaneseHira}
        <br />
        {props.itemData.japaneseLatin}
      </>
    );
  }
  return <div className="card">{content}</div>;
};

export default Card;
