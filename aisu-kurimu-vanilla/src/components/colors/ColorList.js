import React from "react";
import { colors } from "../../data";

import Color from "./Color";
import styles from "./Colors.module.css";

const ColorList = ({ selectedColor, onSelectColor }) => {
  return (
    <div className={styles.Colors}>
      {colors.map((color) => (
        <Color
          key={color}
          color={color}
          selectedColor={selectedColor}
          onSelectColor={onSelectColor}
        />
      ))}
    </div>
  );
};

export default ColorList;
