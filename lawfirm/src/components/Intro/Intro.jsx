import React from "react";
import styles from "./Intro.module.css";

const Attorneys = () => {
  return (
    <div class={styles.container}>
      <div class={styles.leftText}>
        <p>
          Let’s Introduce
          <br /> Ourself
        </p>
      </div>
      <div class={styles.middleLine}></div>
      <div class={styles.rightText}>
        <h3 className={styles.header}>Criminal Lawyer</h3>
        <p className={styles.content}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default Attorneys;
