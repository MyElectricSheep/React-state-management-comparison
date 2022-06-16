import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import styles from "./Colors.module.css";

export default function Colors() {
  const colors = useStoreState((state) => state.colorsSlice.colors);
  const setColors = useStoreActions((actions) => actions.colorsSlice.setColors);

  return (
    <div className={styles.Colors}>
      {colors.map((color) => {
        return (
          <span className={styles.ColorSquareWrapper} key={color.id}>
            <span
              className={`${styles.ColorSquare} ${
                color.isSelected ? styles.ColorSquareSelected : ""
              }`}
              style={{ backgroundColor: color.id }}
              onClick={() => setColors(color.id)}
            />
          </span>
        );
      })}
    </div>
  );
}
