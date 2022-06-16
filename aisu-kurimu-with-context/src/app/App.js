import React from "react";

import { IceCreamWrapper, ColorList, Moods } from "../components";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <IceCreamWrapper />
      <ColorList />
      <Moods />
    </div>
  );
};

export default App;
