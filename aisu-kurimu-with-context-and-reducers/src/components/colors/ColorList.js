import React from "react";
import { useGlobalState } from "../../state/globalState";

import Color from "./Color";
import styles from "./Colors.module.css";

const ColorList = () => {
  const { colors } = useGlobalState();

  return (
    <div className={styles.Colors}>
      {colors.map((color) => (
        <Color key={color} color={color} />
      ))}
    </div>
  );
};

export default ColorList;
