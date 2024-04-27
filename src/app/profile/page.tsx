'use client'

import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { api } from "~/trpc/react";
import styles from "./Account.module.scss";
import { SignIn,  useUser } from "@clerk/nextjs";
import { Navbar } from "../components/navbar/navbar";





export default function Home() {
  noStore();


  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.firstSectionContainer}>
        <div className={styles.profilePic}></div>
        <span className={styles.description}>
          <div>wassup</div>
          <div>how you doin</div>
          <button
            //onClick={() => handleButtonClick("Interviews")}
            className={`btn btn-primary ${styles.applyButton}`}
          >Apply</button>
          <button
            //onClick={() => handleButtonClick("Interviews")}
            className={`btn btn-primary ${styles.shortListButton}`}
          >Shortlist</button>
        </span>
      </div>
      <div className={styles.postingInformation}>Posting Information</div>
      <div className={styles.postingInformation}>Posting Details</div>
      <div className={styles.postingInformation}>Applicant Requirements</div>
      <div className={styles.postingInformation}>Applicant Procedure</div>
    </div>
  );
}
