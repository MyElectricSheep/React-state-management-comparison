import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pickColor, selectColors } from "../../slices/colorsSlice";

import styles from "./Colors.module.css";

export default function Colors() {
  const colors = useSelector(selectColors);
  const dispatch = useDispatch();

  return (
    <div className={styles.Colors}>
      {colors.map((color) => (
        <span className={styles.ColorSquareWrapper} key={color.id}>
          <span
            key={color.id}
            className={`${styles.ColorSquare} ${
              color.isSelected ? styles.ColorSquareSelected : ""
            }`}
            style={{ backgroundColor: color.id }}
            onClick={() => dispatch(pickColor(color.id))}
          />
        </span>
      ))}
    </div>
  );
}
