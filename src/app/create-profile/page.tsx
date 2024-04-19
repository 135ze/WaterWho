"use client";

import React, { useEffect, useState } from "react";
import OnboardProgress from "../components/onboardprogress";
import BasicInfo from "./basic-info";
import OnboardingApplication from "./application";
import OnboardingComplete from "./complete";

import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { Navbar } from "../components/navbar/navbar";

import { api } from "~/trpc/react";
import styles from "./index.module.scss";
import { SignIn, useUser } from "@clerk/nextjs";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState({  displayName: "",
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
    photos: []
  });

  const confirmData = (newData: object) => {
    setData({...data, ...newData});
  }

  useEffect(() => {
    console.log(data);
  }, [data])

  noStore();


  return (
    <>
    <Navbar />
    <main className={styles.main}>
    <h3>Welcome! Let&apos;s create your WaterWho profile!</h3>
    <OnboardProgress currentStep={currentStep} />
    {currentStep === 1 && <BasicInfo handleNext={() => setCurrentStep(currentStep + 1)} sendData={confirmData}/>}
    {currentStep === 2 && <OnboardingApplication handleNext={() => setCurrentStep(currentStep + 1)} handleBack={() => setCurrentStep(currentStep - 1)} sendData={confirmData}/>}
    {currentStep === 3 && <OnboardingComplete profilePic={data.profilePhoto} name={data.displayName} bio={data.yearAndMajor} tags={["Certified_Gamer", "SoundCloud_Rapper", "Cooks", "Simp", "FAANG", "DTF"]} handleBack={() => setCurrentStep(currentStep - 1)}/> }
    </main>
    </>
  );
}
