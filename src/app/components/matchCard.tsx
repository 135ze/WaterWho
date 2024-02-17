import styles from "./MatchCard.module.scss";
/** To Do: likely will have to change this structure depending on what we choose to pass in from API call*/
interface MatchCardProps {
    id: number;
    displayName: string;
    age: number
    program: string;
}

export function MatchCard(props: MatchCardProps) {
    const {id, displayName, age, program} = props;
  return (
    <div className={`p-20 d-flex flex-column justify-content-between p-3 ${styles.cardContainer}`}> 
        <div className={styles.cardImage}>
            <img src="https://pbs.twimg.com/media/FMOMOmGWQAQpapJ.jpg:large"/>
        </div>
        <h1 className={styles.cardPrimaryLine}> {displayName}, {age} </h1>
        <p className={styles.cardSecondaryLine}> {program} </p>
        <button className={`btn btn-secondary ${styles.cardViewProfileButton}`}> View Profile </button>
    </div>

  );
}
