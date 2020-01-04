import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import Board from "../components/Board";
import DataProcessorService from "../services/dataProcessorService";
import { AppState } from "../store/configureStore";
import { CardData, isSpecialCard } from "../types/goalItems";
import { Language } from "../types/general";
import { setRevealed, hideCards, setCards } from "../actions";

type StateProps = {
  cards: Array<CardData>;
};
type DispatchProps = {
  setRevealedCards: (cards: Array<CardData>) => void;
  setCards: (cards: Array<CardData>) => void;
};
type Props = StateProps & DispatchProps;

class BoardContainer extends React.Component<Props> {
  static readonly NUM_INITIAL_REVEALS = 4;

  componentDidMount() {
    const dataProcessor = new DataProcessorService();
    const { shuffledItems } = dataProcessor;

    const initialReveals = this._getInitialReveals(shuffledItems);

    this.props.setRevealedCards(initialReveals);
    this.props.setCards(shuffledItems);
  }

  private _getInitialReveals(shuffledItems: Array<CardData>): Array<CardData> {
    const initialReveals = new Map<number, CardData>();
    for (
      let i = 0, currLang = null;
      i < shuffledItems.length && initialReveals.size < BoardContainer.NUM_INITIAL_REVEALS;
      i++
    ) {
      const item = shuffledItems[i];

      if (isSpecialCard(item)) continue;
      if (initialReveals.has(item.matcherId) || (item.language !== currLang && currLang !== null)) continue;

      initialReveals.set(item.matcherId, item);
      currLang = item.language === Language.ENGLISH ? Language.JAPANESE : Language.ENGLISH;
    }

    return Array.from(initialReveals.values());
  }

  render() {
    return <Board cards={this.props.cards} />;
  }
}

const mapStateToProps = (state: AppState): StateProps => ({
  cards: state.cards
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  setRevealedCards: (cards: Array<CardData>): void => {
    dispatch(setRevealed(cards));

    setTimeout(() => {
      dispatch(hideCards());
    }, 2000);
  },
  setCards: (cards: Array<CardData>): void => {
    dispatch(setCards(cards));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
