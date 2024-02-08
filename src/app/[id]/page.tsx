'use client'

import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import {Navbar} from "../components/navbar"
import { api } from "~/trpc/react";
import { SignIn,  useUser } from "@clerk/nextjs";
import styles from "./Account.module.css";

export default function Home() {
  noStore();

  return (
    <div>
        <Navbar></Navbar>
        <div className={styles.accountContainer}>
          <h1 className={styles.accountHeader}>Welcome back, John!</h1> {/* Add in user name later based on login*/}
          <div className={styles.accountButtonsContainer}>
            <button className={styles.accountButton}> Dashboard </button>
            <button className={styles.accountButton}> Interviews </button>
            <button className={styles.accountButton}> Rankings </button>
            <button className={styles.accountButton}> My Applications </button>
          </div>
        </div>
    </div>
  );
}
