import styles from "./rankingCard.module.scss";
/** To Do: likely will have to change this structure depending on what we choose to pass in from API call*/
interface RankingsCardProps {
    id: number,
    name: string,
    program: string,
    term: string
}

export function RankingCard(props: RankingsCardProps) {
    const {id, name, program, term} = props;
  return (
    <div className={`d-flex flex-column justify-content-between ${styles.cardContainer}`}> 
        <div className={`p-4 d-flex flex-column justify-content-between ${styles.cardContents}`}>
            <div className={styles.cardImage}>
                <img src="https://pbs.twimg.com/media/FMOMOmGWQAQpapJ.jpg:large"/>
            </div>
            <h1 className={styles.cardPrimaryLine}> {name} </h1>
            <p className={styles.cardSecondaryLine}> {program} </p>
            <div className={`mx-3 mb-3 rounded-circle text-center ${styles.cardRanking}`}>
                <h2 className={`${styles.cardRankingText}`}>{id}</h2>
            </div>
            <button className={`btn btn-secondary ${styles.cardViewProfileButton}`}> View Profile </button>
        </div>
    </div>

  );
}
