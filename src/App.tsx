import React from "react";
import { Provider } from "react-redux";

import "./styles/base.scss";

import { store } from "./store/configureStore";
import Board from "./components/Board";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Board></Board>
      </div>
    </Provider>
  );
};

export default App;
