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
import buttonStyles from "./Basic-Info.module.scss";
import { useRouter } from 'next/navigation'

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
    photos: [] as File[],
  });

  const confirmData = (newData: object) => {
    setData({ ...data, ...newData });
  };
  
  useEffect(() => {
    console.log(data);
  }, [data]);

  const user = useUser()
  const router = useRouter()

  const upsert = api.profile.upsertProfile.useMutation().mutate

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

            <div className={styles.buttonContainer}>
                    <button
                      type="button"
                      className={`${buttonStyles.cpNextButton} px-4 rounded-3 btn btn-primary mx-3`}
                      onClick={() => setCurrentStep(2)}
                    >
                      &laquo; Back
                    </button>
                    <button
                        type="button"
                        className={`${buttonStyles.cpNextButton} px-4 rounded-3 btn btn-primary mx-3`}
                        onClick={() => {
                          if (user.user?.id) {
                            upsert({UserID: user.user?.id, Name: data.displayName, DateOfBirth: new Date(), Gender: data.gender, Religion: data.religion, 
                              SexualOrientation: data.sexualOrientation, Height: 1, School: data.university, YearAndMajor: data.sexualOrientation, 
                              Location: data.location, CurrentStudyTerm: data.studyTerm, Mbti: 1, Tags: data.tags, PhoneNumber: data.phoneNumber, 
                              Discord: data.discordUsername, Instagram: data.instagramUsername, PersonalDescription: data.employer, RelationshipStyle: data.position,
                              BenefitsAndCompensation: data.benefits, Interests: data.interests, DealBreakers: data.dealbreakers, DesiredTraits: data.traits, 
                              AccountCreatedDate: new Date(), 
                            })
                          }
                          router.push("/profile")
                        }}
                      >
                        Submit &raquo;
                      </button>
              </div>
          </div>
        )}
      </main>
    </>
  );
}
