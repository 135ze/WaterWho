import styles from "./BrowseCards.module.scss";

interface BrowseCardProp {
  id: number;
  displayName: string;
  age: number;
  program: string;
}

export function BrowseCard(props: BrowseCardProp) {
  const { id, displayName, age, program } = props;

  return (
    <div className={`rounded-5 mb-3 ${styles.bcContainer}`}>
      <div className={`py-4 px-5 d-flex ${styles.bcProfile}`}>
        <img
          className={"border border-black rounded-circle"}
          src="https://pbs.twimg.com/media/FMOMOmGWQAQpapJ.jpg:large"
        />
        <div className="ms-3">
          <p className="fs-5 m-0"> {displayName} </p>
          <p className="mb-2 fst-italic"> {program} </p>
          <button type="button" className="px-4 m-0 btn btn-tertiary">Shortlist</button>
          <button type="button" className={`px-4 btn btn-primary mx-3`}>View</button>
          <p className="fw-light fst-italic mt-2 m-0"> Total Applicants: 100 </p>
        </div>
      </div>
    </div>
  );
}
