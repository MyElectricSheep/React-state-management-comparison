import React from "react";
import styles from "./Colors.module.css";
import { useGlobalState, useDispatch } from "../../state";

const Color = ({ color }) => {
  const { selectedColor } = useGlobalState();
  const dispatch = useDispatch();

  const selectColor = (color) => {
    dispatch({
      type: "SET_COLOR",
      payload: color,
    });
  };

  return (
    <span className={styles.ColorSquareWrapper}>
      <span
        key={color}
        className={`${styles.ColorSquare} ${
          color === selectedColor ? styles.ColorSquareSelected : ""
        }`}
        style={{ backgroundColor: color }}
        onClick={() => selectColor(color)}
      />
    </span>
  );
};

export default Color;
