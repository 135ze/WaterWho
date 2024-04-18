"use client";

import React, { useEffect, useState } from "react";
import OnboardProgress from "../components/onboardprogress";
import BasicInfo from "./basic-info";
import OnboardingApplication from "./application";
import OnboardingComplete from "./complete";

import hehe from "../assets/sadpiplup.jpeg";

import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { Navbar } from "../components/navbar/navbar";

import { api } from "~/trpc/react";
import styles from "./index.module.scss";
import { SignIn, useUser } from "@clerk/nextjs";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [test, setTest] = useState({test1: "test1", test2: "test2"})

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  }
  noStore();

  const temp = (test1: string, test2: string) => {
    setTest({test1: test1, test2: test2})
  }

  useEffect(() => {
    console.log(test)
  }, [test])

  return (
    <>
    <Navbar />
    <main className={styles.main}>
    <h3>Welcome! Let&apos;s create your WaterWho profile!</h3>
    <OnboardProgress currentStep={currentStep} />
    {currentStep === 1 && <BasicInfo handleNext={handleNext} sendData={temp}/>}
    {currentStep === 2 && <OnboardingApplication handleNext={handleNext}/> }
    {currentStep === 3 && <OnboardingComplete profilePic={hehe} name={"piplup"} bio={"certified 2a guy"} tags={["Certified_Gamer", "SoundCloud_Rapper", "Cooks", "Simp", "FAANG", "DTF"]}/> }
    </main>
    </>
  );
}
