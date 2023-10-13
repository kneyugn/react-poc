import { useState, useEffect } from "react";
import styles from "./counter.module.css";

export default function Counter() {
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    const setTimer = async () => {
      setTimeout(() => {
        setCounter(counter + 1);
      }, 1000);
    };

    setTimer();
  });

  // TODO[x]: styling with classes from css modules
  return <h1 className={styles.test}>counter {counter}</h1>;
}
