import React from "react";
import Image from "next/image";
import errorImage from "../assets/sadpiplup.jpeg";
import styles from "./fallback.module.scss";
import { Navbar } from "../components/navbar";

export default function Custom404() {
  // ...

  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.container}>
        <div className={styles.textWrapper}>
          <h1>Uh oh!</h1>
          <h4>We couldn&apos;t find the page you were looking for :(</h4>
          <p>lmao loser</p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={errorImage}
            alt="404 - Page Not Found"
            className={styles.image}
          />
        </div>
      </section>
    </main>
  );
}
