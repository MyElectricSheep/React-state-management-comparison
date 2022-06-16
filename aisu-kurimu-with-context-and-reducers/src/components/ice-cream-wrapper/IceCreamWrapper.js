import React from "react";
import { IceCream } from "react-kawaii";
import { useGlobalState } from "../../state";

import styles from "./IceCreamWrapper.module.css";

function IceCreamWrapper() {
  const { selectedColor, selectedMood } = useGlobalState();

  return (
    <div className={styles.IceCreamWrapper}>
      <IceCream size={400} color={selectedColor} mood={selectedMood} />
    </div>
  );
}

export default IceCreamWrapper;
