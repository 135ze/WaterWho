"use client";
import styles from "./Menu.module.css";
import Image from "next/image";
import menuImage from "../assets/menu.png";

export function Menu() {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuToggle}>
        <Image src={menuImage} alt="Menu" width={30} height = {30}/>
      </div>
      <div className={styles.menuTab}></div>
    </div>
  );
}