'use client'
import styles from "./back-to-button.module.scss"
 
export function BackToButton() {
  return (
  <button className={`btn btn-secondary-grey`}>
      <h1 className={styles.header}> 
        WaterWho
      </h1>
  </button>
  )
}