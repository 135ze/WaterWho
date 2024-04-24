"use client";

import styles from "./ApplicantCard.module.scss";
import { Tag } from "./tag";
import textStyles from "./MatchCard.module.scss";

interface BrowseCardProp {
  displayName: string;
  program: string;
}

export function ApplicantCard(props: BrowseCardProp) {
  const { displayName, program } = props;

  return (
    <div
      className={`justify-content-between rounded-5 mb-3 ${styles.bcContainer}`}
    >
      <div className="d-flex">
        <div className={styles.cardImage}>
          <img src="https://pbs.twimg.com/media/FMOMOmGWQAQpapJ.jpg:large" />
        </div>
        <div className={`ms-4 m-0 ${styles.applicantInfo}`}>
          <div>
            <h1 className={`fs-4 m-0`}>{props.displayName}</h1>
            <p className="mt-1 fst-italic"> {program} </p>
          </div>
          <div className="d-flex">
            <button
              type="button"
              className="px-4 rounded-3 btn btn-primary me-3"
            >
              View
            </button>
            <button
              type="button"
              className={`px-4 rounded-3 btn btn-primary me-3 ${styles.btnAccept}`}
            >
              Accept
            </button>
            <button
              type="button"
              className={`px-4 rounded-3 btn btn-primary me-3 ${styles.btnReject}`}
            >
              Reject
            </button>
          </div>
        </div>
      </div>
      <div className={`mt-3 px-4 py-3 ${styles.noteContainer}`}>
        <p className="fw-bold fst-italic"> Speed Note</p>
        <div
          className={`${styles.noteInnerContainer} p-4 d-flex  justify-content-center`}
        >
          Insert rizzy line here: blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah
        </div>
      </div>
    </div>
  );
}
