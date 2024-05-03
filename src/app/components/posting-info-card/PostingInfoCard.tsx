'use client'
import styles from "./postingInfoCard.module.scss"
import Check from "../../assets/check.png"
import Image from "next/image";

interface PostingInfoCardProps {
    displayText : string;
  }
 
export function PostingInfoCard({displayText} : PostingInfoCardProps) {
  return (
  <div className={styles.container}>
    <Image src={Check} alt="Check" className={styles.checkmark}/>
    <span className={styles.displayText}>{displayText}</span>
  </div>
  )
}