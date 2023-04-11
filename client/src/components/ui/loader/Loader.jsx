import React from "react";
import styles from "./Loader.module.scss";

export default function Loader({ color }) {
  return (
    <div className={styles.loader}>
      <div
        style={{
          borderColor: `${color} transparent transparent transparent`,
        }}
      ></div>
      <div
        style={{
          borderColor: `${color} transparent transparent transparent`,
        }}
      ></div>
      <div
        style={{
          borderColor: `${color} transparent transparent transparent`,
        }}
      ></div>
      <div
        style={{
          borderColor: `${color} transparent transparent transparent`,
        }}
      ></div>
    </div>
  );
}
