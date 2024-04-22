'use client'
import { Menu } from "../menu/menu"
import styles from "./Navbar.module.scss"
 
export function Navbar() {
  return (
  <div className={styles.container}>
    <Menu></Menu>
    <h1 className={styles.header}> 
      WaterWho
    </h1>
  </div>
  )
}