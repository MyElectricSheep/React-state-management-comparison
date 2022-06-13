import React from "react";
import { useGlobalState } from "../state/globalState";
import { IceCreamWrapper, ColorList, Moods, LightToggler } from "../components";

import "./App.css";

const App = () => {
  const { darkMode } = useGlobalState();
  return (
    <div className={`App ${darkMode ? "darkBackground" : ""}`}>
      <LightToggler />
      <main>
        <IceCreamWrapper />
        <ColorList />
        <Moods />
      </main>
    </div>
  );
};

export default App;
