import styles from "./Dashboard.module.css";
import React, { useState } from "react";

export function DashboardMenu() {
  const [activeButton, setActiveButton] = useState<string>("Matches");
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };
  return (
    <div className={styles.dm}>
      <div className={styles.dmContainer}>
        <div>
          <button
            onClick={() => handleButtonClick("Matches")}
            className={`${styles.dmButton} ${
              activeButton == "Matches" ? styles.dmWhiteButton : ""
            }`}
          >
            Matches
          </button>
          <button
            onClick={() => handleButtonClick("Browse")}
            className={`${styles.dmButton} ${
              activeButton == "Browse" ? styles.dmWhiteButton : ""
            }`}
          >
            Browse
          </button>
          <button
            onClick={() => handleButtonClick("Applicants")}
            className={`${styles.dmButton} ${
              activeButton == "Applicants" ? styles.dmWhiteButton : ""
            }`}
          >
            Applicants
          </button>
        </div>
        <div>
          {activeButton == "Matches" && (
            <p className={styles.dmNumMatchesText}> TOTAL MATCHES: </p>
          )}
        </div>
      </div>
      <div className={styles.dmBody}>{/*Match cards to be placed here*/}</div>
    </div>
  );
}
