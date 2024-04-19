import styles from "./Rankings.module.scss";
import React, { useState } from "react";

import { RankingCard } from "./RankingCard";

export function Rankings() {
  const RankingsData = [
    {
      id: 1,
      name: "Mango",
      program: "Computer Science",
      term: "2A"
    },
    {
      id: 2,
      name: "Strawberry",
      program: "Computer Science",
      term: "2A"
    },
    {
      id: 3,
      name: "Pear",
      program: "Computer Science",
      term: "2A"
    },
    {
      id: 4,
      name: "pple",
      program: "Computer Science",
      term: "2A"
    },
    {
      id: 5,
      name: "Mango",
      program: "Computer Science",
      term: "2A"
    },
    {
      id: 6,
      name: "Strawberry",
      program: "Computer Science",
      term: "2A"
    },
    {
      id: 7,
      name: "Pear",
      program: "Computer Science",
      term: "2A"
    },
    {
      id: 8,
      name: "pple",
      program: "Computer Science",
      term: "2A"
    }
    /* These are just for testing purposes*/
  ];

  return (
    <div className={styles.dm}>
      <div className={`${styles.dmBody} ${styles.dmRankingsGrid}`}>
        {RankingsData.map((ranking) => (
            <RankingCard
              key={ranking.id}
              id={ranking.id}
              name={ranking.name}
              program={ranking.program}
              term={ranking.term}
            />
          ))}
      </div>
      <button className={`btn btn-secondary`}>Edit Rankings</button>
      <button className={`btn btn-primary`}>Submit Rankings</button>
    </div>
  );
}
