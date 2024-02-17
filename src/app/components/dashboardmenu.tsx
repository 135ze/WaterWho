import styles from "./Dashboard.module.scss";
import React, { useState } from "react";
import { MatchCard } from "./matchCard";
export function DashboardMenu() {
  const [activeButton, setActiveButton] = useState<string>("Matches");
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };
  const [matchData, setMatchData] = useState([
    {
      id: 1,
      displayName: "Mango",
      age: 21,
      program: "Computer Science",
      term: "2A",
    },
    { id: 2, displayName: "Orange", age: 20, program: "Software Engineering" },
    {
      id: 3,
      displayName: "Banana",
      age: 20,
      program: "Computer Science & Business Administration",
      term: "2B",
    },
    {
      id: 4,
      displayName: "Grape",
      age: 21,
      program: "I am a droput",
      term: "2B",
    },
    { id: 5, displayName: "Strawberry", age: 21, program: "Wahoo", term: "2B" },
    {
      id: 5,
      displayName: "LooooongName",
      age: 21,
      program: "Systems Design Engineering",
      term: "2B",
    },
    /* These are just for testing purposes*/
  ]);

  return (
    <div className={styles.dm}>
      <div className={styles.dmContainer}>
        <div>
          <button
            onClick={() => handleButtonClick("Matches")}
            className={`btn btn-secondary  ${styles.dmButton} ${
              activeButton == "Matches" ? styles.dmWhiteButton : ""
            }`}
          >
            Matches
          </button>
          <button
            onClick={() => handleButtonClick("Browse")}
            className={`btn btn-secondary ${styles.dmButton} ${
              activeButton == "Browse" ? styles.dmWhiteButton : ""
            }`}
          >
            Browse
          </button>
          <button
            onClick={() => handleButtonClick("Applicants")}
            className={`btn btn-secondary ${styles.dmButton} ${
              activeButton == "Applicants" ? styles.dmWhiteButton : ""
            }`}
          >
            Applicants
          </button>
        </div>
        <div>
          {activeButton == "Matches" && (
            <p className={styles.dmNumMatchesText}> TOTAL MATCHES: {matchData.length} </p>
          )}
        </div>
      </div>
      <div
        className={`${styles.dmBody} ${
          activeButton == "Matches" ? styles.dmMatchesGrid : ""
        }`}
      >
        {activeButton === "Matches" &&
          /* TO DO: future, may want to check for values existence before rendering for safety */
          matchData.map((match) => (
            <MatchCard
              key={match.id}
              id={match.id}
              displayName={match.displayName}
              age={match.age}
              program={match.program}
            />
          ))}
      </div>
    </div>
  );
}
