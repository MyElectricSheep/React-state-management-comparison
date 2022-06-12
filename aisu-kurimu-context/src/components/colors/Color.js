import React from "react";
import styles from "./Colors.module.css";
import { useColorContext } from "../../context";

const Color = ({ color }) => {
  const { setSelectedColor, isSelectedColor } = useColorContext();

  return (
    <span className={styles.ColorSquareWrapper}>
      <span
        key={color}
        className={`${styles.ColorSquare} ${
          isSelectedColor(color) ? styles.ColorSquareSelected : ""
        }`}
        style={{ backgroundColor: color }}
        onClick={() => setSelectedColor(color)}
      />
    </span>
  );
};

export default Color;
