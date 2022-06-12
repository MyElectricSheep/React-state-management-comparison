import React from "react";
import styles from "./Colors.module.css";

const Color = ({ color, selectedColor, onSelectColor }) => {
  return (
    <span className={styles.ColorSquareWrapper}>
      <span
        key={color}
        className={`${styles.ColorSquare} ${
          color === selectedColor ? styles.ColorSquareSelected : ""
        }`}
        style={{ backgroundColor: color }}
        onClick={() => onSelectColor(color)}
      />
    </span>
  );
};

export default Color;
