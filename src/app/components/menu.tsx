"use client";
import React, {useState} from 'react';
import styles from "./Menu.module.css"
import Image from "next/image";
import menuImage from "../assets/menu.png";
import cross from "../assets/close.png";

export function Menu() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className="hover d-flex ">
        <div
          onClick={() => {
            menuOpen ? setMenuOpen(false) : setMenuOpen(true);
          }}
          className={`d-flex align-items-center ${styles.menuToggle}`}
        >
          <Image src={menuOpen ? cross : menuImage} alt="Menu" width={menuOpen ? 20 : 25} height={menuOpen ? 20: 25} />
        </div>
        <div className={styles.menuTab}></div>
      </div>
      {menuOpen && (
        <div className={`position-absolute ${styles.menuContainer}`}>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Home
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className={`hover accordion-body text-primary`}>
                  <p className="mb-0 ms-2"> Dashboard </p>
                  <p className="mt-3 mb-0 ms-2"> Interviews </p>
                  <p className="mt-3 mb-0 ms-2"> Rankings </p>
                  <p className="mt-3 mb-0 ms-2"> My Applications </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  My Profile
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="text-primary hover accordion-body">
                  <p className="mb-0 ms-2"> View Profile </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Documents
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="hover text-primary accordion-body">
                  <p className="mb-0 ms-2"> Application Package </p>
                  <p className="mt-3 mb-0 ms-2"> My References </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
