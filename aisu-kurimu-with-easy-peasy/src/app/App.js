import React from "react";

import IceCreamWrapper from "../components/ice-cream-wrapper";
import Colors from "../components/colors";
import Moods from "../components/moods";

import "./App.css";

function App() {
  return (
    <div className="App">
      <IceCreamWrapper />
      <Colors />
      <Moods />
    </div>
  );
}

export default App;
