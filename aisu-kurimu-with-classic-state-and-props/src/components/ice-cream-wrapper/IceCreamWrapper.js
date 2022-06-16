import React from "react";
import { IceCream } from "react-kawaii";

import styles from "./IceCreamWrapper.module.css";

function IceCreamWrapper({ color, mood }) {
  return (
    <div className={styles.IceCreamWrapper}>
      <IceCream size={400} color={color} mood={mood} />
    </div>
  )
}

export default IceCreamWrapper;