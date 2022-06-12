import React, { createContext, useState, useContext } from "react";
import { colors, moods } from "../data";

const GlobalContext = createContext();

const useGlobalContext = () => useContext(GlobalContext);

const GlobalContextProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const isSelectedColor = (color) => color === selectedColor;

  const [selectedMood, setSelectedMood] = useState(moods[0]);
  const isSelectedMood = (mood) => mood === selectedMood;

  return (
    <GlobalContext.Provider
      value={{
        selectedColor,
        setSelectedColor,
        isSelectedColor,
        selectedMood,
        setSelectedMood,
        isSelectedMood,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider, useGlobalContext };
