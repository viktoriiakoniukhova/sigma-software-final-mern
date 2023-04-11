import React from "react";
import styles from "./Offer.module.scss";
import Loader from "../../ui/loader/Loader";

export default function Offer({ data }) {
  return (
    <div className={styles.offerWrapper}>
      <header>
        <span>Offer</span>
        <h2>We Offer Organic For You</h2>
      </header>
      {data.length ? (
        <div className={styles.content}>{data}</div>
      ) : (
        <Loader color={"#fff"} />
      )}
    </div>
  );
}
