import React, { useState } from "react";
import styles from "./Component.module.css";

const index = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span>Count: {count}</span>
      <button
        className={`${styles.button}`}
        onClick={() => setCount((c) => c + 1)}
      >
        +
      </button>
    </div>
  );
};

export default index;
