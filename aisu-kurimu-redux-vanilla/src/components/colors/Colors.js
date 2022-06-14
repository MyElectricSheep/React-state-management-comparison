import React from "react";
import { useColors } from "../../hooks/useColors";
import styles from "./Colors.module.css";

export default function Colors() {
  const { colors, setColor } = useColors();
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
            onClick={() => setColor(color.id)}
          />
        </span>
      ))}
    </div>
  );
}
