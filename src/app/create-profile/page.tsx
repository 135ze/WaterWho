"use client";

import React, { useEffect, useState } from "react";
import OnboardProgress from "../components/onboarding/onboardprogress";
import BasicInfo from "./basic-info";
import OnboardingApplication from "./application";
import OnboardingComplete from "./complete";

import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { Navbar } from "../components/navbar/navbar";

import { api } from "~/trpc/react";
import styles from "./index.module.scss";
import pageStyles from "./Onboard.module.scss";
import { SignIn, useUser } from "@clerk/nextjs";
import { pages } from "next/dist/build/templates/app-page";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState({
    displayName: "",
    birthDate: "",
    location: "",
    gender: "",
    sexualOrientation: "",
    height: "",
    religion: "",
    university: "",
    yearAndMajor: "",
    studyTerm: "",
    mbti: "",
    tags: "",
    phoneNumber: "",
    discordUsername: "",
    instagramUsername: "",
    profilePhoto: null,
    employer: "",
    benefits: "",
    position: "",
    interests: "",
    dealbreakers: "",
    expectations: "",
    traits: "",
    photos: [],
  });

  const confirmData = (newData: object) => {
    setData({ ...data, ...newData });
  };

  const handleChange = (step: number) => {
    setCurrentStep(step);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  noStore();

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h3>Welcome! Let&apos;s create your WaterWho profile!</h3>
        <OnboardProgress
          currentStep={currentStep}
          returnToBasic={() => setCurrentStep(1)}
          returnToApp={() => setCurrentStep(2)}
        />
        {currentStep === 1 && (
          <div className={pageStyles.mainContainer}>
            <BasicInfo
              handleNext={() => setCurrentStep(currentStep + 1)}
              sendData={confirmData}
            />
          </div>
        )}

        {currentStep === 2 && (
          <div className={pageStyles.mainContainer}>
            <OnboardingApplication
              handleNext={() => setCurrentStep(currentStep + 1)}
              handleBack={() => setCurrentStep(currentStep - 1)}
              sendData={confirmData}
            />
          </div>
        )}

        {currentStep === 3 && (
          <div className={pageStyles.mainContainer}>
            <OnboardingComplete
              profilePic={data.profilePhoto}
              name={data.displayName}
              bio={data.yearAndMajor}
              tags={[
                "Certified_Gamer",
                "SoundCloud_Rapper",
                "Cooks",
                "Simp",
                "FAANG",
                "DTF",
              ]}
              handleBack={() => setCurrentStep(currentStep - 1)}
            />
          </div>
        )}
      </main>
    </>
  );
}
