import React, { useState } from "react";

import { IceCreamWrapper, ColorList, Moods } from "../components";
import { colors } from "../data";
import { moods } from "../data";

import "./App.css";

const App = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedMood, setSelectedMood] = useState(moods[0]);

  const handleSelectColor = (color) => {
    setSelectedColor(color);
  };

  const handleSelectMood = (mood) => {
    setSelectedMood(mood);
  };

  return (
    <div className="App">
      <IceCreamWrapper color={selectedColor} mood={selectedMood} />
      <ColorList
        selectedColor={selectedColor}
        onSelectColor={handleSelectColor}
      />
      <Moods selectedMood={selectedMood} onSelectMood={handleSelectMood} />
    </div>
  );
};

export default App;
