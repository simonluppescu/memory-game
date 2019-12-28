import React from "react";
import { connect } from "react-redux";

import Board from "../components/Board";
import { AppState } from "../store/configureStore";

interface Props {
  isGameOver: boolean;
}

const BoardContainer: React.FC<Props> = (props) => {
  return <Board isGameOver={props.isGameOver} />;
};

const mapStateToProps = (state: AppState) => ({
  isGameOver: state.isGameOver
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
