"use client";

import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { api } from "~/trpc/react";
import styles from "./Account.module.scss";
import { SignIn, useUser } from "@clerk/nextjs";
import { Navbar } from "../components/navbar/navbar";
import { PostingInfoCard } from "../components/posting-info-card/PostingInfoCard";

export default function Home() {
  noStore();

  const user = useUser();
  //userProfile will haev the entire user's profile information.
  let userProfile;
  if (user.user?.id) {
    userProfile = api.profile.getProfile.useQuery({
      UserID: user.user?.id,
    }).data;
  }

  console.log({ userProfile });
  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.firstSectionContainer}>
        <div className={styles.profilePic}></div>
        <span className={styles.description}>
          <div>posting id - applicant name</div>
          <div>grade + program @ sum university</div>
          <button
            //onClick={() => handleButtonClick("Interviews")}
            className={`btn btn-primary ${styles.applyButton}`}
          >
            Apply
          </button>
          <button
            //onClick={() => handleButtonClick("Interviews")}
            className={`btn btn-primary ${styles.shortListButton}`}
          >
            Shortlist
          </button>
        </span>
      </div>

      <div className={styles.postingInformation}>Posting Information</div>
      <div className={styles.tagsContainer}>
        <PostingInfoCard displayText={"Male"} />
        <PostingInfoCard displayText={"Straight"} />
        <PostingInfoCard displayText={"22 Years Old"} />
        <PostingInfoCard displayText={"Study Term"} />
        <PostingInfoCard displayText={"Waterloo"} />
        <PostingInfoCard displayText={"6'4"} />
      </div>

      <div className={styles.postingInformation}>Posting Details</div>
      <div className={styles.postingDetailsContainer}>
        <div className={styles.imageCarouselWrapper}>
          <div className={styles.imageCarousel}></div>
        </div>
        <div className={styles.descriptionWrapper}>
          <div className={styles.descriptionHeader}>About the Employer</div>
          <div className={styles.descriptionDetails}>
            I am a capybara, and I like to eat grass. Omnomnomnomnomnom. I also
            enjoy prancing through the fields and indulging in organic produce.
          </div>
        </div>
        <div className={styles.descriptionWrapper}>
          <div className={styles.descriptionHeader}>
            Benefits & Compensation
          </div>
          <div className={styles.descriptionDetails}>
            I will cook you a meal 3x a week. I am also DTF whenever you want.
          </div>
        </div>
        <div className={styles.descriptionWrapper}>
          <div className={styles.descriptionHeader}>
            Position Start Date & Duration
          </div>
          <div className={styles.descriptionDetails}>
            As soon as possible. Long term commitment (serious applicants
            only!!!)
          </div>
        </div>
      </div>

      <div className={styles.postingInformation}>Applicant Requirements</div>
      <div className={styles.postingInformation}>Applicant Procedure</div>
    </div>
  );
}
