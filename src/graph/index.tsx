import React from "react";
import styles from "./style.module.css";

function Graph() {
  let arr = [];
  for (let i = 0; i < 120; ) {
    arr.push((i += 1));
  }

  let arr2 = [];
  for (let i = 0; i < 12; ) {
    arr2.push((i += 1));
  }

  return (
    <div className={styles.body}>
      <div className={styles.content2}>
        {arr2.map(() => (
          <div className={styles.col}>
            <div className={styles.percent}></div>
          </div>
        ))}
      </div>

      <div className={styles.content}>
        {arr.map(() => (
          <div className={styles.item}></div>
        ))}
      </div>
    </div>
  );
}

export default Graph;
