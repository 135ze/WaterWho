import styles from "./Interviews.module.scss";
import React, { useState } from "react";

import { InterviewCard } from "./interviewCard";

export function Interviews() {
  const interviewsData = [
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
      <div className={`${styles.dmBody} ${styles.dmInterviewsGrid}`}>
        {interviewsData.map((interview) => (
            <InterviewCard
              key={interview.id}
              id={interview.id}
              name={interview.name}
              program={interview.program}
              term={interview.term}
            />
          ))}
      </div>
    </div>
  );
}
