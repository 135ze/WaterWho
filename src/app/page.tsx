"use client";

import { unstable_noStore as noStore } from "next/cache";
import styles from "./Landing.module.scss";
import Logo from "./assets/logo.png";
import Dropdown from "./assets/dropdown.png";
import Image from "next/image";
// import Link from "next/link";
// import { Navbar } from "./components/navbar/navbar";
// import { api } from "~/trpc/react";
// import { SignIn, useUser } from "@clerk/nextjs";

export default function Home() {
  noStore();

  return (
    <div className={`${styles.main}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image src={Logo} alt="Logo" width={80} height={80} />
          </a>
          <div className="d-flex flex-row-reverse">
            <div className="btn-group">
              <button
                className={`btn rounded ${styles.accountButton}`}
                role="button"
              >
                <p className="m-1">
                  <b>Log In</b>
                </p>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`text-center ${styles.header}`}>WaterWho?</div>
      <div className={`text-center ${styles.subheader}`}>
        who will YOU meet?
      </div>
      <div className={`text-center ${styles.dropdown}`}>
        <Image src={Dropdown} alt="dropdown" width={80} height={50} />
      </div>

      <div className={`text-left ${styles.sectionHeader}`}>
        What is WaterWho?
      </div>
      {/* TO DO - DESCRIPTIONS */}
      <div className={`${styles.sectionDescription}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>

      <div className={`${styles.cardSwiperWrapper}`}>
        <div className={`${styles.cardSwiper}`}>
          <div className={`${styles.cardGroup}`}>
            <div className={`${styles.bigCard} ${styles.card}`}></div>
            <div className={`${styles.smallCard} ${styles.card}`}></div>
            <div className={`${styles.smallCard} ${styles.card}`}></div>
            <div className={`${styles.smallCard} ${styles.card}`}></div>
            <div className={`${styles.smallCard} ${styles.card}`}></div>
            <div className={`${styles.smallCard} ${styles.card}`}></div>
            <div className={`${styles.smallCard} ${styles.card}`}></div>
          </div>
        </div>
      </div>

      <div className={`text-left ${styles.sectionHeader}`}>
        Apply. Interview. Match.
      </div>
      {/* TO DO - DESCRIPTIONS */}
      <div className={`${styles.sectionDescription}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>

      <div className={`${styles.iconsWrapper}`}>
        <div className={`${styles.iconCard}`}></div>
        <div className={`${styles.iconCard}`}></div>
        <div className={`${styles.iconCard}`}></div>
      </div>

    </div>
  );
}
