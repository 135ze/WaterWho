"use client";

import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { api } from "~/trpc/react";
import styles from "./Account.module.scss";
import { SignIn, useUser } from "@clerk/nextjs";
import { Navbar } from "../components/navbar/navbar";
import { PostingInfoCard } from "../components/posting-info-card/PostingInfoCard";
import Check2 from "../assets/IconCardCheck.png";
import Speech from "../assets/IconCardSpeech.png";
import Image from "next/image";

export default function Home() {
  noStore();

  const user = useUser()
  //userProfile will have the entire user's profile information. 
  let userProfile
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
          {/* we don't have posting id's i dont think */}
          {/* <div>posting id - {userProfile?.firstName ? userProfile?.firstName : 'firstname'} {userProfile?.lastName ? userProfile?.lastName : 'surname'}</div>
           */}
           <div>
              posing id - firstName lastName
           </div>
          <div> year + program @ sum university</div>
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
      <div className={styles.sectionSubheader}>Ideal candidates must have the following qualifications:</div>
      <div className={styles.applicantRequirementsContainer}>
        <div className={styles.requirementWrapper}>
          <Image src={Check2} alt="Check" className={styles.checkIcon} />
          <div className={styles.requirementHeader}>Relationship Expectations</div>
          <div className={styles.requirementDetails}>
            meets up for dates once a week, is loyal, likes cuddles {"<3"}
          </div>
        </div>
        <div className={styles.requirementWrapper}>
          <Image src={Check2} alt="Check" className={styles.checkIcon} />
          <div className={styles.requirementHeader}>Interests</div>
          <div className={styles.requirementDetails}>
            league, kpop, taylor swift
          </div>
        </div>
        <div className={styles.requirementWrapper}>
          <Image src={Check2} alt="Check" className={styles.checkIcon} />
          <div className={styles.requirementHeader}>Desired Traits</div>
          <div className={styles.requirementDetails}>
            6 pack, 6 feet, 6 figure job plz
          </div>
        </div>
        <div className={styles.requirementWrapper}>
          <Image src={Check2} alt="Check" className={styles.checkIcon} />
          <div className={styles.requirementHeader}>Dealbreakers</div>
          <div className={styles.requirementDetails}>
            smoking and doing drugs are big nonos!
          </div>
        </div>
      </div>

      <div className={styles.postingInformation}>Applicant Procedure</div>
      <div className={styles.applicantProcedureWrapper}>
        <Image src={Speech} alt="Speech Bubble" className={styles.speechIcon} />
        <div className={styles.applicantProcedureDetails}>
          Dating term history and letter of intent required!
        </div>
      </div>
    </div>
  );
}
