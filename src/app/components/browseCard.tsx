import styles from "./BrowseCards.module.scss";
import { Tag } from "./tag";

interface BrowseCardProp {
  displayName: string;
  program: string;
  tags: string[];
}

export function BrowseCard(props: BrowseCardProp) {
  const { displayName, program, tags} = props;

  return (
    <div className={`d-flex justify-content-between rounded-5 mb-3 ${styles.bcContainer}`}>
      <div>
        <div className={`py-4 px-5 d-flex ${styles.bcProfile}`}>
          <img
            className={"border border-black rounded-circle"}
            src="https://pbs.twimg.com/media/FMOMOmGWQAQpapJ.jpg:large"
          />
          <div className="ms-3">
            <p className="fs-5 m-0"> {displayName} </p>
            <p className="mb-2 fst-italic"> {program} </p>
            <button
              type="button"
              className={`px-4 rounded-3 m-0 btn btn-tertiary`}
            >
              Shortlist
            </button>
            <button
              type="button"
              className={`px-4 rounded-3 btn btn-primary mx-3`}
            >
              View
            </button>
            <p className="fw-light fst-italic mt-2 m-0">
              {" "}
              Total Applicants: 100{" "}
            </p>
          </div>
        </div>
      </div>
      <div className={`d-flex flex-wrap align-content-center me-2 container text-center ${styles.bcTagsContainer}`}>
      {tags.map((tag) => (
        <Tag tagString={tag}></Tag>
      ))}
      </div>
    </div>
  );
}
