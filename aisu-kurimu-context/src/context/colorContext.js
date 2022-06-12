import React, { createContext, useState, useContext } from "react";
import { colors } from "../data";

const ColorContext = createContext();

const useColorContext = () => useContext(ColorContext);

const ColorContextProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const isSelectedColor = (color) => color === selectedColor;

  return (
    <ColorContext.Provider
      value={{ selectedColor, setSelectedColor, isSelectedColor }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export { ColorContextProvider, useColorContext };
