import React, { createContext, useState, useContext } from "react";
import { moods } from "../data";

const MoodContext = createContext();

const useMoodContext = () => useContext(MoodContext);

const MoodContextProvider = ({ children }) => {
  const [selectedMood, setSelectedMood] = useState(moods[0]);
  const isSelectedMood = (mood) => mood === selectedMood;
  return (
    <MoodContext.Provider
      value={{ selectedMood, setSelectedMood, isSelectedMood }}
    >
      {children}
    </MoodContext.Provider>
  );
};

export { MoodContextProvider, useMoodContext };
