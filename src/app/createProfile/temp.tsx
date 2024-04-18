'use client'

import React from 'react'
import styles from './Application.module.scss'
import { Navbar } from '../components/navbar'
import { Menu } from '../components/menu'
import OnboardProgress from '../components/onboardprogress'
import OnboardingApplication from './application'
import OnboardingComplete from './complete'
import temp from "../assets/sadpiplup.jpeg";


export default function Onboarding(){
  const [currentStep, setCurrentStep] = React.useState(2);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  }
  return (
    <>
    <Navbar />
    <main className={styles.main}>
    <h3>Welcome! Let&apos;s create your WaterWho profile!</h3>
    <OnboardProgress currentStep={currentStep} />
    {currentStep === 1 && <Menu />}
    {currentStep === 2 && <OnboardingApplication handleNext={handleNext}/> }
    {currentStep === 3 && <OnboardingComplete profilePic={temp} name={"piplup"} bio={"certified 2a guy"} tags={["Certified_Gamer", "SoundCloud_Rapper", "Cooks", "Simp", "FAANG", "DTF"]}/> }
    </main>
    </>
  )
}