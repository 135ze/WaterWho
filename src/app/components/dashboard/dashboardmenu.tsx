'use client'

import styles from "./Dashboard.module.scss";
import React, { useState } from "react";
import { MatchCard } from "./matchCard";
import { BrowseCard } from "./browseCard";
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
      tags: ["Certified_Gamer", "Simp", "FAANG", "SoundCloud_Rapper", "Cooks"],
    },
    {
      id: 2,
      displayName: "Orange",
      age: 20,
      program: "Software Engineering",
      term: "1B",
      tags: ["Certified_Gamer", "Simp", "FAANG", "SoundCloud_Rapper", "Cooks"],
    },
    {
      id: 3,
      displayName: "Banana",
      age: 20,
      program: "Computer Science & Business Administration",
      term: "2B",
      tags: ["Certified_Gamer", "Simp", "CS_Nerd", "DTF"],
    },
    {
      id: 4,
      displayName: "Grape",
      age: 21,
      program: "I am a droput",
      term: "2B",
      tags: ["Certified_Gamer", "Simp", "DTF"],
    },
    {
      id: 5,
      displayName: "Strawberry",
      age: 21,
      program: "Wahoo",
      term: "2B",
      tags: ["Certified_Gamer", "Simp", "FAANG", "SoundCloud_Rapper", "Cooks"],
    },
    {
      id: 6,
      displayName: "LooooongName",
      age: 21,
      program: "Systems Design Engineering",
      term: "2B",
      tags: ["Certified_Gamer", "Masters_in_League", "DTF"],
    },
    /* These are just for testing purposes*/
  ]);

  return (
    <div className={styles.dm}>
      <div
        className={`d-flex p-3 mt-4 mb-4 flex-column justify-content-between ${styles.dmContainer}`}
      >
        <div>
          <button
            onClick={() => handleButtonClick("Matches")}
            className={`btn btn-secondary ${styles.dmButton} ${
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
          {activeButton === "Matches" && (
            <div className="d-flex">
              <p className={styles.dmNumMatchesText}>TOTAL MATCHES:</p>
              <div
                className={`mx-3 border border-dark px-3 rounded-4 ${styles.dmNumberBubble}`}
              >
                {matchData.length}
              </div>
            </div>
          )}

          {activeButton === "Browse" && (
            <form>
              <input
                placeholder="Keyword Search"
                className={`rounded px-3 fs-6 border border-dark ${styles.dmSearch}`}
                type="text"
              />
            </form>
          )}
        </div>
      </div>
      <div
        className={`${styles.dmBody} ${
          activeButton === "Matches" ? styles.dmMatchesGrid : ""
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

        {activeButton === "Browse" &&
          matchData.map((match) => (
            <BrowseCard
              key={match.id}
              displayName={match.displayName}
              program={match.program}
              tags={match.tags}
            />
          ))}
      </div>
    </div>
  );
}
