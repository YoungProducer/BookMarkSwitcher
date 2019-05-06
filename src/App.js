import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import PrivateCabinet from "./components/PrivateCabinet";

import rootReducer from "./store/reducers";

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <PrivateCabinet />
      </div>
    </Provider>
  );
};

export default App;
