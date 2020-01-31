import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers"; // import reducers

const App = () => {
  return (
    <Provider>
      <View store={createStore(reducers)} />; // pass reducers to store
    </Provider>
  );
};

export default App;
