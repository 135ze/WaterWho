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
      className={`d-flex justify-content-between rounded-5 mb-3 ${styles.bcContainer}`}
    >
      <div className="d-flex">
        <div className={styles.cardImage}>
          <img src="https://pbs.twimg.com/media/FMOMOmGWQAQpapJ.jpg:large" />
        </div>
        <div className={`ms-4 ${styles.applicantInfo}`}>
          <h1 className={`${textStyles.cardPrimaryLine} m-0`}>
            {props.displayName}
          </h1>
          <p className="mt-2"> {program} </p>
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
    </div>
  );
}
