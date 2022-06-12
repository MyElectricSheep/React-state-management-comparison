import React from "react";
import { IceCream } from "react-kawaii";
import { useStoreState } from "easy-peasy";

import styles from "./IceCreamWrapper.module.css";

function IceCreamWrapper() {
  const activeColor = useStoreState((state) => state.colorsSlice.activeColor);
  const activeMood = useStoreState((state) => state.moodsSlice.activeMood);

  return (
    <div className={styles.IceCreamWrapper}>
      <IceCream size={400} color={activeColor} mood={activeMood} />
    </div>
  );
}

export default IceCreamWrapper;
