import React from "react";
import { Provider } from "react-redux";

import "./styles/base.scss";

import { store } from "./store/configureStore";
import BoardContainer from "./containers/BoardContainer";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <BoardContainer />
      </div>
    </Provider>
  );
};

export default App;
