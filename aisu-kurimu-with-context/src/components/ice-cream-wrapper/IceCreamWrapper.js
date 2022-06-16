import React from "react";
import { IceCream } from "react-kawaii";
import { useColorContext, useMoodContext } from "../../context";

import styles from "./IceCreamWrapper.module.css";

function IceCreamWrapper() {
  const { selectedColor } = useColorContext();
  const { selectedMood } = useMoodContext();
  return (
    <div className={styles.IceCreamWrapper}>
      <IceCream size={400} color={selectedColor} mood={selectedMood} />
    </div>
  );
}

export default IceCreamWrapper;
