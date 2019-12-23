import React from "react";

import "./styles/base.scss";

import Board from "./components/Board";

const App: React.FC = () => {
  return (
    <div className="app">
      <Board></Board>
    </div>
  );
};

export default App;
